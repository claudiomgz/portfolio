import { component$ } from "@builder.io/qwik";
import Experience from "~/components/experience";

export default component$(() => {
  return (
    <div class="md:flex-1">
      <h2 class="text-step-1 mb-4 text-black uppercase font-bold border-gray-500 dark:border-gray-100 dark:text-white">
        Sobre mí
      </h2>
      <p class="mb-4 text-gray-800 dark:text-white">
        Radicado en la ciudad de Santa Fe, asistí a la Universidad Tecnológica
        Nacional en donde adquirí conocimientos fundamentales cursando en la
        carrera de Ingeniería en Sistemas gracias a materias, proyectos y
        pasantías del área. Con el tiempo seguí mi aprendizaje de forma
        autodidacta, haciendo cursos en línea, lecturas y proyectos personales,
        lo que me ha permitido expandir y aplicar mis habilidades de manera
        continua.
      </p>
      <p class="mb-4 text-gray-900 font-medium dark:text-gray-400">
        Actualmente me desempeño como Analista Desarrollador en Conmega ACE.
      </p>
      <p class="mb-4 text-gray-800 dark:text-white">
        Desarrollo de sistemas empresariales en .NET con Windows Forms, ASP.NET
        Web API, SQL Server. Capaz de crear servicios web escalables,
        aplicaciones de escritorio y gestionar bases de datos relacionales.
      </p>
      <Experience />
    </div>
  );
});
