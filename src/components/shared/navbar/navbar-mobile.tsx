import { type QRL, component$ } from '@builder.io/qwik';
import HamburgerButton from '~/components/ui/hamburger-button';
import ModeSwitch from '~/components/ui/mode-switch';
import { Section } from '../header/header';

interface Props {
	showMenu: boolean;
	changeShowMenu: QRL<() => void>;
	isNameActive: string;
}

export default component$(({ showMenu, changeShowMenu, isNameActive }: Props) => {
	return (
		<nav class='px-5 sm:hidden flex flex-col gap-4 py-4'>
			<div class='flex justify-between'>
				<a title='IconoInicio' href='#inicio' class='text-black dark:text-white'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						class='w-7 h-7'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
						/>
					</svg>
				</a>
				<div class='flex justify-center items-center gap-5'>
					<ModeSwitch />
					<HamburgerButton showMenu={showMenu} changeShowMenu={changeShowMenu} />
				</div>
			</div>
			<div class={`h-screen ${showMenu ? '' : 'hidden'}`}>
				<ul class='flex flex-col justify-center items-center gap-6 font-medium text-black capitalize'>
					<li class='text-step-0 py-4 hover:text-blue-500'>
						<a
							title={Section.Inicio}
							href={`#${Section.Inicio}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.Inicio
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.Inicio}
						</a>
					</li>
					<li class='text-step-0 py-4'>
						<a
							title={Section.Conoceme}
							href={`#${Section.Conoceme}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.Conoceme
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.Conoceme}
						</a>
					</li>
					<li class='text-step-0 py-4'>
						<a
							title={Section.Proyectos}
							href={`#${Section.Proyectos}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.Proyectos
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.Proyectos}
						</a>
					</li>
					<li class='text-step-0 py-4'>
						<a
							title={Section.Contacto}
							href={`#${Section.Contacto}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.Contacto
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.Contacto}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
});
