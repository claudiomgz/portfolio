import { component$ } from "@builder.io/qwik";
import Experience from "~/components/experience";

export default component$(() => {
  return (
    <div class="md:flex-1">
      <h2 class="text-step-1 mb-4 text-black uppercase font-bold border-gray-500 dark:border-gray-100 dark:text-white">
        Sobre mí
      </h2>
      <p class="mb-4 text-gray-800 dark:text-white">
        Actualmente me desempeño como desarrollador C# .NET/ SQL Server en la
        Mutual de Integrantes del Poder Judicial. Experiencia en C#, Node.js y
        SQL Server, con enfoque en la programación orientada a objetos, patrones
        de diseño y la optimización de consultas. Capaz de crear servicios web,
        aplicaciones de escritorio y gestionar bases de datos relacionales.
      </p>
      <p class="mb-4 text-gray-900 font-medium dark:text-gray-400">
        Mis principales objetivos son formarme en el ámbito laboral y poner en
        uso mis aprendizajes adquiridos, así como seguir aprendiendo en base a
        las nuevas experiencias.
      </p>
      <p class="mb-4 text-gray-800 dark:text-white">
        Comprometido con el aprendizaje continuo y adaptación a las últimas
        tecnologías.
      </p>
      <Experience />
    </div>
  );
});
