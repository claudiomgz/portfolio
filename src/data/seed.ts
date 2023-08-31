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
		icon: 'css',
	},
	{
		name: 'JavaScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'javascript',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'bootstrap',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'react',
	},
	{
		name: 'Handlebars',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'handlebars',
	},	
	{
		name: 'Qwik',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'qwik',
	},
	{
		name: 'C#',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'csharp',
	},
	{
		name: '.NET',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'net',
	},
	{
		name: 'Node.js',
		type: 'Backend',
		level: 'Avanzado',
		icon: 'nodejs',
	},
	{
		name: 'C++',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'c++',
	},
	{
		name: 'SQL Server',
		type: 'DataBase',
		level: 'Avanzado',
		icon: 'sqlserver',
	},
	{
		name: 'PostgreSQL',
		type: 'DataBase',
		level: 'Avanzado',
		icon: 'postgresql',
	},	
	{
		name: 'MySQL',
		type: 'DataBase',
		level: 'Intermedio',
		icon: 'mysql',
	},
];

export const projects = [
	{
		title: 'Desarrollador C# .NET / SQL Server',
		description:
			'Aplicaciones de escritorio en C# con MVC, Windows Forms, LinQ, SQL Server y Crystal Reports. -Migración de viejos sistemas en VB6 a C#. -Introducción a aplicaciones moviles con React Native. -Administración de servidores.',
		technologies: ['Csharp', 'net', 'SQLServer', 'react'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'http://www.mipj.org.ar/',
		updatedAt: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
		createdAt: `2021-11-02`,
		byMe: false,
	},
	{
		title: 'Catálogo de productos',
		description:
			'El usuario puede navegar, elegir y ver detalles de cada producto para luego ponerse en contacto con el vendedor para obtener mas información y efectuar la compra. Además, el sistema cuenta con acceso al administrador de los productos que se muestran.',
		technologies: ['Handlebars', 'JavaScript', 'Nodejs', 'postgresql'],
		imageUrl: 'proyecto-2',
		githubUrl: 'https://github.com/claudiomgz/catalogo-de-productos',
		websiteUrl: 'https://catalogoapp.onrender.com/',
		createdAt: '2022-12-12',
		updatedAt: '2023-08-05',
		byMe: true,
	},
	{
		title: 'Anotador de truco web',
		description:
			'Responsive y desarrllado en simple JavaScript Vanilla. Utilización de Bootstrap para el diseño, NPM en la etapa de desarrollo. Permite llevar la cuenta de una partida de truco argentino entre dos equipos.',
		technologies: ['html5', 'css', 'JavaScript', 'Bootstrap', 'NodeJs'],
		imageUrl: 'proyecto-1',
		githubUrl: 'https://github.com/claudiomgz/anotador-de-truco',
		websiteUrl: 'https://anotadordetruco.netlify.app/',
		createdAt: '2021-05-01',
		updatedAt: '2021-12-13',
		byMe: true,
	},
	{
		title: 'Guía de Hoteles',
		description:
			'Sitio web estático con diseño responsive aplicando clases con bootstrap. Preprocesadores Less y Sass. NPM en la etapa de desarrollo con algunos módulos de node.js.',
		technologies: ['html5', 'css', 'JavaScript', 'bootstrap', 'NodeJs'],
		imageUrl: 'proyecto-2',
		githubUrl: 'https://github.com/claudiomgz/hoteles-static-web',
		websiteUrl: 'https://guiadehoteles.netlify.app/',
		createdAt: '2020-10-12',
		updatedAt: '2020-12-12',
		byMe: true,
	},
];

export const socials = [
	{
		title: 'LinkedIn',
		href: 'https://www.linkedin.com/in/claudiomonguzzi/',
		icon: 'linkedin',
	},
	{
		title: 'claudiomonguzzi80@gmail.com',
		href: 'mailto:claudiomonguzzi80@gmail.com',
		icon: 'gmail',
	},
	{
		title: '@claudiomgz',
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
