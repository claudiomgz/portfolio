import { component$ } from '@builder.io/qwik';
import CardProjects from './card/card-projects';

export default component$(() => {
	return (
		<section class='bg-pallete-light dark:bg-dark-container py-10' id='proyectos'>
			<div class='px-5 max-w-4xl mx-auto'>
				<h2 class='text-step-1 text-black dark:text-white uppercase font-bold border-black mb-4 dark:border-gray-100'>
					Proyectos
				</h2>
				<CardProjects />
			</div>
		</section>
	);
});
