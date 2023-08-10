import { type Signal, createContextId } from '@builder.io/qwik';

export interface UIProps {
	theme: Signal<'light' | 'dark'>;
	isScrolled: Signal<boolean>;
	showMenu: Signal<boolean>;
	showAlert: Signal<boolean>;
}

export const UIContext = createContextId<UIProps>('ui-context');
