import { component$ } from '@builder.io/qwik';

import AboutDescription from '~/components/about-description';
import Skills from '~/components/skills';

export default component$(() => {
	return (
		<section class='px-5 max-w-4xl mx-auto py-10 flex flex-col md:flex-row gap-10' id='sobre mi'>
			{/* <Lottie idContainer='about' path='about' class='w-full h-full max-w-[200px]' /> */}
			<AboutDescription />
			<Skills />
		</section>
	);
});
