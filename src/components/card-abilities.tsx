import { component$ } from '@builder.io/qwik';
import { abilities } from '~/data/seed';
import Image from '~/components/image';

interface Props {
	type: 'Frontend' | 'Backend' | 'DataBase' | 'Others';
}

export default component$(({ type }: Props) => {
	return (
		<>
			<h3 class='mb-5 text-step-0 font-semibold dark:text-white capitalize inline-block border-b-2 border-blue-300'>
				{type}
			</h3>
			<ul class='mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2'>
				{abilities
					.filter((ability) => ability.type === type)
					.map((ability) => (
						<li key={ability.name}>
							<div class='flex flex-col items-center gap-2'>
								<Image
									width={40}
									height={40}
									src={`/icons/${ability.name.toLowerCase()}.svg`}
									alt={ability.name}
								/>
								<span class='text-gray-500 mb-3 dark:text-gray-400 capitalize'>
									{ability.name}
								</span>
							</div>
						</li>
					))}
			</ul>
		</>
	);
});
