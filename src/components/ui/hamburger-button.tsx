import { type QRL, component$ } from '@builder.io/qwik';

interface Props {
	showMenu: boolean;
	changeShowMenu: QRL<() => void>;
}

export default component$(({ showMenu, changeShowMenu }: Props) => {
	return (
		<button
			aria-label='HambugerButton'
			class='block sm:hidden focus:outline-none'
			onClick$={changeShowMenu}
		>
			<div
				class={`w-6 h-[2.5px] rounded-full bg-black mb-1 transform transition duration-500 dark:bg-white ${
					showMenu ? 'rotate-45 translate-y-1.5' : ''
				}`}
			></div>
			<div
				class={`w-6 h-[2.5px] rounded-full bg-black mb-1 transform transition duration-500 dark:bg-white ${
					showMenu ? 'opacity-0' : ''
				}`}
			></div>
			<div
				class={`w-6 h-[2.5px] rounded-full bg-black transform transition duration-500 dark:bg-white ${
					showMenu ? '-rotate-45 -translate-y-1.5' : ''
				}`}
			></div>
		</button>
	);
});
