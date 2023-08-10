import {
	type Signal,
	Slot,
	component$,
	useContextProvider,
	useSignal,
	useStore,
	useVisibleTask$,
	$,
	useOnDocument,
} from '@builder.io/qwik';
import { UIContext } from './ui-context';

export interface UIState {
	theme: Signal<'light' | 'dark'>;
	isScrolled: Signal<boolean>;
	showMenu: Signal<boolean>;
	showAlert: Signal<boolean>;
}

export const UIProvider = component$(() => {
	const theme = useSignal<'light' | 'dark'>('light');
	const isScrolled = useSignal(false);
	const showMenu = useSignal(false);
	const showAlert = useSignal(false);

	const UI_Initial_State = useStore<UIState>({
		theme,
		isScrolled,
		showMenu,
		showAlert,
	});

	const handleScroll = $(() => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			isScrolled.value = true;
		} else {
			isScrolled.value = false;
		}
	});

	useOnDocument('scroll', handleScroll);

	useVisibleTask$(() => {
		const colorTheme = localStorage.getItem('theme') as 'light' | 'dark';

		if (colorTheme) {
			if (colorTheme === 'dark') {
				theme.value = 'dark';
			} else {
				theme.value = 'light';
			}
		}
	});

	useVisibleTask$(({ track }) => {
		track(() => UI_Initial_State.theme.value);

		if (theme.value === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	});

	useVisibleTask$(({ track, cleanup }) => {
		track(() => UI_Initial_State.showAlert.value);

		let timer: NodeJS.Timeout;

		if (showAlert.value) {
			timer = setTimeout(() => {
				showAlert.value = false;
			}, 5000);
		}

		cleanup(() => {
			clearTimeout(timer);
		});
	});

	// Usando el contexto
	useContextProvider(UIContext, UI_Initial_State);

	return <Slot />;
});
