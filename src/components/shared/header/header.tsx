import { component$, useContext, $, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { UIContext } from '~/context/ui/ui-context';

import NavbarDesktop from '~/components/shared/navbar/navbar-desktop';
import NavbarMobile from '~/components/shared/navbar/navbar-mobile';

const observerOptions = {
	root: null,
	rootMargin: '-50% 0px -50% 0px',
	threshold: 0,
};

export default component$(() => {
	const { theme, isScrolled, showMenu } = useContext(UIContext);

	const isNameActive = useSignal<string>('inicio');

	const onSectionEnterViewport = $((entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute('id') as string;
				isNameActive.value = id;
			}
		});
	});

	const changeShowMenu = $(() => {
		showMenu.value = !showMenu.value;
	});

	useVisibleTask$(({ cleanup }) => {
		const observer = new IntersectionObserver(onSectionEnterViewport, observerOptions);
		const sections = document.querySelectorAll('section[id]');
		sections.forEach((section) => {
			observer.observe(section);
		});

		cleanup(() => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		});
	});

	return (
		<header
			class={`${
				isScrolled.value ? '' : 'border-b shadow-sm border-gray-200 dark:border-gray-500'
			} fixed top-0 w-full z-50 text-pallete-light-gray-500 bg-white dark:bg-dark-header`}
			style={{
				backdropFilter: 'saturate(180%) blur(5px)',
				background: `${
					isScrolled.value
						? theme.value === 'light'
							? 'hsla(0, 0%, 100%, .8)'
							: 'hsla(210, 44%, 13%, .8)'
						: ''
				}`,
			}}
		>
			{/* Escritorio */}
			<NavbarDesktop isNameActive={isNameActive.value} />

			{/* Mobile */}
			<NavbarMobile
				showMenu={showMenu.value}
				changeShowMenu={changeShowMenu}
				isNameActive={isNameActive.value}
			/>
		</header>
	);
});
