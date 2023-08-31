import { component$ } from "@builder.io/qwik";

import Lottie from "~/components/lottie";
import FormContact from "~/components/contact-form";
import Alert from "~/components/ui/alert";

export default component$(() => {
  return (
    <section class="relative" id="contacto">
      <div class="px-5 max-w-4xl mx-auto py-10 flex flex-col gap-2">
        <div class="md:flex md:gap-10">
          <div class="hidden flex-1 md:flex md:flex-col">
            <h2 class="text-step-1 uppercase mb-2 text-black dark:text-white font-bold">
              Contáctame
            </h2>
            <p class="text-black dark:text-white mb-2">
              Puedes contactarme a través de este formulario o enviarme un
              correo electrónico a{" "}
              <a
                href="mailto:claudiomonguzzi80@gmail.com"
                class="dark:text-white font-medium hover:underline"
              >
                claudiomonguzzi80@gmail.com
              </a>
            </p>
            <p class="text-black dark:text-white mb-2">
              !No dudes en contactarme!
            </p>
            {/* <SocialNetworks
							class='flex flex-col'
							classNameLink='flex gap-2 items-center'
							showTitle
						/> */}
            <Lottie
              idContainer="contact"
              path="contact"
              class="hidden sm:flex flex-1 w-80"
            />
          </div>
          <div class="flex-1">
            <h2 class="flex-initial md:hidden text-step-1 uppercase mb-2 text-black dark:text-white font-bold">
              Contáctame
            </h2>
            <p class="text-black dark:text-white mb-2 md:hidden">
              Puedes contactarme a través de este formulario o enviarme un
              correo electrónico a{" "}
              <a
                href="mailto:claudiomonguzzi80@gmail.com"
                class="dark:text-white font-medium hover:underline"
              >
                claudiomonguzzi80@gmail.com
              </a>
            </p>
            <p class="text-black dark:text-white mb-2 md:hidden">
              !No dudes en contactarme!
            </p>
            {/* <p class='flex-initial md:hidden text-black mb-4 dark:text-white'>
							¿Tienes un proyecto que quieras discutir? ¡No dudes en contactarme!
						</p> */}
            <FormContact />
          </div>
        </div>
      </div>
      <Alert>
        <span q:slot="title">¡Gracias por contactarme!</span>
        <span q:slot="message">Te responderé lo más pronto posible.</span>
      </Alert>
    </section>
  );
});
