import { component$ } from '@builder.io/qwik';
import FormContact from './form/form-contact';
import Alert from './ui/alert';
import { Lottie } from './lottie/lottie';

export default component$(() => {
	return (
		<section class='relative' id='contacto'>
			<div class='px-5 max-w-4xl mx-auto py-10 flex flex-col gap-2'>
				<div class='md:flex md:gap-10'>
					<div class='hidden flex-1 md:flex md:flex-col'>
						<h2 class='text-step-1 uppercase mb-2 text-black dark:text-white font-bold'>
							Contacto
						</h2>
						<p class='text-black dark:text-white mb-2'>
							¿Tienes un proyecto que quieras discutir? ¡No dudes en contactarme!
						</p>
						{/* <SocialNetworks
							class='flex flex-col'
							classNameLink='flex gap-2 items-center'
							showTitle
						/> */}
						<Lottie idContainer='contact' path='contact' class='hidden sm:flex flex-1 w-80' />
					</div>
					<div class='flex-1'>
						<h2 class='flex-initial md:hidden text-step-1 uppercase mb-2 text-black dark:text-white font-bold'>
							Contacto
						</h2>
						<p class='flex-initial md:hidden mb-4 text-gray-700 dark:text-gray-400'>
							Estoy disponible para proyectos freelance. Si tienes alguna pregunta o
							solicitud, no dudes en enviarme un correo electrónico.
						</p>
						{/* <p class='flex-initial md:hidden text-black mb-4 dark:text-white'>
							¿Tienes un proyecto que quieras discutir? ¡No dudes en contactarme!
						</p> */}
						<FormContact />
					</div>
				</div>
			</div>
			<Alert>
				<span q:slot='title'>¡Gracias por contactarme!</span>
				<span q:slot='message'>Te responderé lo más pronto posible.</span>
			</Alert>
		</section>
	);
});
