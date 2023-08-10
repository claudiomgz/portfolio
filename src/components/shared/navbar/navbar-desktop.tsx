import { component$ } from '@builder.io/qwik';

import { Section } from '../header/header';
import ModeSwitch from '~/components/ui/mode-switch';

interface Props {
	isNameActive: string;
}

export default component$(({ isNameActive }: Props) => {
	return (
		<nav class='hidden py-1 px-5 mx-auto sm:flex justify-between items-center max-w-4xl'>
			<a title='IconoInicio' href='#inicio' class='hover:scale-110'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					class='w-7 h-7 text-black dark:text-white'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
					/>
				</svg>
			</a>
			<ul class='flex gap-4 text-sm items-center font-medium capitalize'>
				<li class='py-4'>
					<a
						title={Section.Inicio}
						href={`#${Section.Inicio}`}
						class={`${
							isNameActive === Section.Inicio
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.Inicio}
					</a>
				</li>
				<li class='py-4'>
					<a
						title={Section.Conoceme}
						href={`#${Section.Conoceme}`}
						class={`${
							isNameActive === Section.Conoceme
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.Conoceme}
					</a>
				</li>
				<li class='py-4'>
					<a
						title={Section.Proyectos}
						href={`#${Section.Proyectos}`}
						class={`${
							isNameActive === Section.Proyectos
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.Proyectos}
					</a>
				</li>
				<li class='py-4'>
					<a
						title={Section.Contacto}
						href={`#${Section.Contacto}`}
						class={`${
							isNameActive === Section.Contacto
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.Contacto}
					</a>
				</li>
				<li class='py-4'>
					<ModeSwitch />
				</li>
			</ul>
		</nav>
	);
});
