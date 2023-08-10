export const abilities: {
	name: string;
	type: 'Frontend' | 'Backend' | 'DataBase';
	level: 'Básico' | 'Intermedio' | 'Avanzado';
	icon: string;
}[] = [
	{
		name: 'HTML',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'html5',
	},
	{
		name: 'CSS',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'css3-alt',
	},
	{
		name: 'JavaScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'js',
	},
	{
		name: 'TypeScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: '',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'bootstrap',
	},
	{
		name: 'TailwindCss',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'tailwind-css',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'react',
	},
	{
		name: 'NextJs',
		type: 'Frontend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'Laravel',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'laravel',
	},

	{
		name: 'NodeJs',
		type: 'Backend',
		level: 'Avanzado',
		icon: 'node-js',
	},
	{
		name: 'PHP',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'php',
	},
	{
		name: 'NestJs',
		type: 'Backend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MySQL',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MongoDB',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'GraphQL',
		type: 'Backend',
		level: 'Básico',
		icon: '',
	},
];

export const projects = [
	{
		title: 'C# .NET Developer',
		description:
			'Desarrollo y asdasdasdasd.',
		technologies: ['PHP', 'Html', 'Css', 'JavaScript', 'Bootstrap', 'MySQL'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'https://www.mipj.org.ar',
		updatedAt: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
		createdAt: `2023-01-10`,
		byMe: false,
	},
	{
		title: 'Freelance',
		description:
			'dasdasd.',
		technologies: ['Laravel', 'Html', 'Css', 'JavaScript', 'TailwindCss', 'MySQL'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'https://www.web.com',
		createdAt: '2022-12-12',
		updatedAt: '2023-01-05',
		byMe: false,
	},
	{
		title: 'proyecto1',
		description:
			'detalle.',
		technologies: ['React', 'JavaScript', 'TailwindCss', 'NodeJs', 'MongoDB'],
		imageUrl: 'proyecto-1',
		githubUrl: 'https://github.com/claudiomgz',
		websiteUrl: 'https://web.app',
		createdAt: '2022-11-12',
		updatedAt: '2022-12-13',
		byMe: true,
	},
	{
		title: 'proyecto-2',
		description:
			'detalle.',
		technologies: ['React', 'JavaScript', 'TailwindCss', 'NodeJs', 'MongoDB'],
		imageUrl: 'proyecto-2',
		githubUrl: 'https://github.com/claudiomgz',
		websiteUrl: 'https://web.app',
		createdAt: '2022-10-12',
		updatedAt: '2022-12-12',
		byMe: true,
	},
];

export const socials = [
	{
		title: '@claudiomonguzzi',
		href: 'https://www.linkedin.com/in/claudiomonguzzi',
		icon: 'linkedin',
	},
	{
		title: 'claudiomonguzzi80@gmail.com',
		href: 'mailto:claudiomonguzzi80@gmail.com',
		icon: 'gmail',
	},
	{
		title: '@claudiomgz ',
		href: 'https://github.com/claudiomgz',
		icon: 'github',
	},
];

export const InitialStateContactForm = {
	name: '',
	subject: '',
	email: '',
	message: '',
};

export const currentDate = `${new Date().getFullYear()}-${
	new Date().getMonth() + 1
}-${new Date().getDate()}`;
