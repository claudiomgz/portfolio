import { component$ } from "@builder.io/qwik";

import Timeline from "~/components/timeline";

export default component$(() => {
  return (
    <div class="mt-10">
      <h2 class="text-step-1 text-black uppercase font-bold mb-2 border-gray-500 dark:border-gray-100 dark:text-white">
        Experiencia Profesional
      </h2>
      <Timeline />
    </div>
  );
});
