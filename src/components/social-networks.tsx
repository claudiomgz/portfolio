import { component$ } from '@builder.io/qwik';

import { socials } from '~/data/seed';
import Image from '~/components/image';

interface Props {
	class: string;
	showTitle?: boolean;
	classNameLink?: string;
}

export default component$(({ classNameLink, showTitle, class: className }: Props) => {
	return (
		<ul class={className}>
			{socials.map(({ href, title, icon }) => (
				<li class={classNameLink} key={title}>
					<a title={title} href={href} target='_blank'>
						<Image
							width={35}
							height={35}
							src={`/icons/${icon}.svg`}
							alt={title}
							class='dark:filter dark:invert hover:scale-125 transition-transform duration-200 ease-in-out'
						/>
					</a>
					{showTitle && <span class='dark:text-white'>{title}</span>}
				</li>
			))}
		</ul>
	);
});
