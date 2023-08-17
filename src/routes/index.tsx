import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { type InitialValues } from '@modular-forms/qwik';
import { type ContactForm } from '~/models/contact-form-schema';

import About from '~/components/about';
import Contact from '~/components/contact';
import Hero from '~/components/hero';
import Project from '~/components/project';

export const useContactFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
	name: '',
	email: '',
	message: '',
}));

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
				'Me desempeño como desarrollador C# .NET/ SQL Server en la Mutual de Integrantes del Poder Judicial.',
		},
		{
			name: 'keywords',
			content:
				'Claudio Monguzzi Desarrollador, Claudio Developer, Monguzzi, Claudio, Backend, Fullstack Developer',
		},
		{
			name: 'og:title',
			content: 'Claudio Monguzzi | Developer',
		},
		{
			name: 'og:description',
			content:
				'Experiencia en C#, Node.js y SQL Server, con enfoque en la programación orientada a objetos, patrones de diseño y la optimización de consultas. Capaz de crear servicios web, aplicaciones de escritorio y gestionar bases de datos relacionales. Comprometido con el aprendizaje continuo y adaptación a las últimas tecnologías.',
		},
		{
			name: 'og:image',
			content: '/imgs/preview.webp',
		},
	],
};
