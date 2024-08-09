import { component$ } from "@builder.io/qwik";

import SocialNetworks from "~/components/social-networks";
import Lottie from "~/components/lottie";

export default component$(() => {
  return (
    <section
      class="w-full h-screen relative bg-gradient-to-b via-transparent from-white to-blue-50 dark:from-dark-container dark:to-dark-container"
      id="inicio"
    >
      <div class="absolute top-1/2 left-1/2 sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-transparent opacity-50 rounded-full blur-[45px] h-32 w-32"></div>
      <div class="px-5 flex text-black flex-col-reverse sm:flex-row justify-center md:gap-10 items-center max-w-4xl mx-auto h-full">
        <div>
          <h1 class="text-step-4 font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent">
            Claudio Monguzzi
          </h1>
          <p class="text-step-2 font-bold capitalize font-code text-black dark:text-white">
            Desarrollador Fullstack
          </p>
          <p class="sm:mb-4 text-gray-500 dark:text-gray-400 text-step-0">
            Experiencia en C# .NET, Node.js y bases de datos SQL, con enfoque en
            la programación orientada a objetos, patrones de diseño y la
            optimización de consultas.
          </p>
          <div class="flex justify-between items-center mt-4 md:mt-0">
            <SocialNetworks class="flex gap-2 items-center" />
            {/* <a
              // href="/docs/ClaudioMonguzzi.pdf"
              href="#"
              title="Descargar CV"
              download={true}
              target="_blank"
              class="text-step--1 font-lato flex shadow-lg px-2 py-2 items-center gap-2 rounded-md bg-black text-white hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700 transition ease-in-out duration-300"
            >
              <p>Descargar CV</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={1.5}
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <Lottie
          path="hero"
          idContainer="hero"
          class="w-full h-auto md:h-full max-w-xs"
        />
      </div>
    </section>
  );
});
