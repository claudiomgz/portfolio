import { component$ } from '@builder.io/qwik';

import { currentDate, projects } from '~/data/seed';
import { formatDate } from '~/helpers/format-date';
import Image from '~/components/image';

export default component$(() => {
	return (
		<ul class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
			{projects
				.filter((project) => project.byMe)
				.sort(
					(a, b) => new Date(a.updatedAt).getFullYear() - new Date(b.createdAt).getFullYear()
				)
				.map((project, index) => (
					<li key={index}>
						<div class='border bg-white dark:bg-dark-body dark:border-gray-600 relative flex items-center justify-between rounded-lg overflow-hidden hover:shadow transition-shadow ease-in-out duration-200'>
							<div class='p-4'>
								<h2 class='capitalize font-semibold text-black dark:text-white'>
									{project.title}
								</h2>
								<p class='text-gray-500 text-step--1 my-1 dark:text-white'>
									<time>{formatDate(project.createdAt)}</time>
									<span> - </span>
									<time>
										{project.updatedAt === currentDate
											? 'Actualmente'
											: formatDate(project.updatedAt)}
									</time>
								</p>
								<p class='text-gray-500 line-clamp-3 text-sm dark:text-gray-400'>
									{project.description}
								</p>
								<div class='flex justify-between items-center mt-4 gap-5'>
									<ul class='flex flex-wrap items-center gap-2'>
										{project.technologies.map((technology) => (
											<li key={technology}>
												<Image
													width={20}
													height={20}
													src={`/icons/${technology.toLowerCase()}.svg`}
													alt={technology}
												/>
											</li>
										))}
									</ul>
									<div class='flex justify-end items-center gap-2 capitalize'>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											title='Github'
											class='hover:scale-125 transition-transform ease-in-out duration-200'
										>
											<Image
												width={25}
												height={25}
												src='/icons/github.svg'
												alt='github'
												class='dark:filter dark:invert'
											/>
										</a>
										<a
											href={project.websiteUrl}
											target='_blank'
											rel='noopener noreferrer'
											title='Ver Proyecto'
											class='hover:scale-125 transition-transform ease-in-out duration-200'
										>
											<Image
												width={25}
												height={25}
												src='/icons/website.svg'
												alt='send'
												class='dark:filter dark:invert'
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
		</ul>
	);
});
