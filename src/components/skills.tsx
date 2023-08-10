import { component$ } from '@builder.io/qwik';
import CardAbilities from './card/card-abilities';

export default component$(() => {
	return (
		<div class='md:flex-1'>
			<h2 class='text-step-1 uppercase font-bold text-black dark:text-white mb-4 md:mb-2'>
				Skills
			</h2>
			<CardAbilities type='Frontend' />
			{/* Backend */}
			<CardAbilities type='Backend' />
			{/* DataBase */}
			<CardAbilities type='DataBase' />
		</div>
	);
});
