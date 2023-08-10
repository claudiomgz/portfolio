import { component$ } from "@builder.io/qwik";
import Experience from "./experience";

export default component$(() => {
  return (
    <div class="md:flex-1">
      <h2 class="text-step-1 mb-4 text-black uppercase font-bold border-gray-500 dark:border-gray-100 dark:text-white">
        Sobre mí
      </h2>
      <p class="mb-4 text-gray-800 dark:text-white">
        Soy Claudio Rubén Monguzzi, tengo 28 años. Actualmente resido en Santa
        Fe capital, donde me desempeño como desarrollador C#/.NET SQL Server y
        Administrador de Sistemas en la Mutual de Integrantes del Poder
        Judicial. Admemás estudio desarrollo web de forma autodidacta y soy
        estudiante universitario de sistemas.
      </p>
      <p class="mb-4 text-gray-900 font-semibold dark:text-gray-400">
        Mis principales objetivos son formarme en el ámbito laboral y poner en
        uso mis aprendizajes adquiridos, así como seguir aprendiendo en base a
        las nuevas experiencias. Mi objetivo es crear productos que ofrezcan
        experiencias excepcionales, con un diseño atractivo, intuitivo y de alta
        calidad.
      </p>
      <p class="mb-4 text-gray-800 dark:text-white">
        Soy un apasionado por la programación Backend, la lógica y el manejo de
        datos. Estudio Ingeniería en Sistemas en la UTN Facultad Regional Santa
        Fe, en donde cuento con 16 materias arpobadas.
      </p>
      <Experience />
    </div>
  );
});
