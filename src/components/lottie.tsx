import { component$, useVisibleTask$ } from '@builder.io/qwik';
import lottie from 'lottie-web';

interface Props {
	path: string;
	idContainer: string;
	class: string;
}

export default component$(({ class: className, path, idContainer }: Props) => {
	useVisibleTask$(() => {
		lottie.loadAnimation({
			container: document.getElementById(`lottie-${idContainer}`)!,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: `/lottie/${path}.json`,
		});
	});

	return <div class={`fadeIn ${className}`} id={`lottie-${idContainer}`}></div>;
});
