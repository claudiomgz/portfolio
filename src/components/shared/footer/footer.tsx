import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="px-5 md:px-3 border-t text-step--1 shadow border-gray-200 dark:border-gray-500 dark:bg-dark-footer py-4">
      <p class="dark:text-white text-center">
        Claudio Monguzzi - {new Date().getFullYear()}
      </p>
    </footer>
  );
});
