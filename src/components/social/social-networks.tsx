import { socials } from '~/data/seed';

interface Props {
	class: string;
	showTitle?: boolean;
	classNameLink?: string;
}

export const SocialNetworks = ({ class: className, showTitle, classNameLink }: Props) => {
	return (
		<ul class={className}>
			{socials.map(({ href, title, icon }) => (
				<li class={classNameLink} key={title}>
					<a title={title} href={href} target='_blank'>
						<img
							width={35}
							height={35}
							src={`/icons/${icon}.svg`}
							alt={title}
							class='dark:filter dark:invert hover:scale-125'
						/>
					</a>
					{showTitle && <span class='dark:text-white'>{title}</span>}
				</li>
			))}
		</ul>
	);
};
