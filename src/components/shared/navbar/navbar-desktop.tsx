import { component$ } from '@builder.io/qwik';

import ModeSwitch from '~/components/ui/mode-switch';

interface Props {
	isNameActive: string;
}

export default component$(({ isNameActive }: Props) => {
	return (
		<nav class='hidden py-1 px-5 mx-auto sm:flex justify-between items-center max-w-4xl'>
			<a
				title='IconoInicio'
				href='#inicio'
				class='hover:scale-110 transition-transform duration-200 ease-in-out'
			>
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
			<ul class='flex gap-4 text-sm items-center font-medium'>
				<li class='py-4'>
					<a
						title='Inicio'
						href='#inicio'
						class={`${
							isNameActive === 'inicio'
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200`}
					>
						Inicio
					</a>
				</li>
				<li class='py-4'>
					<a
						title='Sobre mi'
						href='#sobre mi'
						class={`${
							isNameActive === 'sobre mi'
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200`}
					>
						Sobre mi
					</a>
				</li>
				<li class='py-4'>
					<a
						title='Proyectos'
						href='#proyectos'
						class={`${
							isNameActive === 'proyectos'
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200`}
					>
						Proyectos
					</a>
				</li>
				<li class='py-4'>
					<a
						title='Contacto'
						href='#contacto'
						class={`${
							isNameActive === 'contacto'
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400 transition ease-in-out duration-200`}
					>
						Contacto
					</a>
				</li>
				<li class='py-4'>
					<ModeSwitch />
				</li>
			</ul>
		</nav>
	);
});
