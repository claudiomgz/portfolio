import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import About from '~/components/about';
import Contact from '~/components/contact';
import Hero from '~/components/hero';
import Project from '~/components/project';

export default component$(() => {
	return (
		<>
			<Hero />
			<About />
			<Project />
			<Contact />
		</>
	);
});

export const head: DocumentHead = {
	title: 'Claudio Monguzzi - Developer',
	meta: [
		{
			name: 'author',
			content: 'Claudio Monguzzi',
		},
		{
			name: 'description',
			content:
				'Claudio Monguzzi - FullStack Developer description.',
		},
		{
			name: 'keywords',
			content:
				'-',
		},
		{
			name: 'og:title',
			content: 'Claudio Monguzzi - Developer',
		},
		{
			name: 'og:description',
			content:
				'sobre mi',
		},
		{
			name: 'og:image',
			content: '/imgs/preview.webp',
		},
	],
};
