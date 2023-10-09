import { component$ } from "@builder.io/qwik";
import Experience from "~/components/experience";

export default component$(() => {
  return (
    <div class="md:flex-1">
      <h2 class="text-step-1 mb-4 text-black uppercase font-bold border-gray-500 dark:border-gray-100 dark:text-white">
        Sobre mí
      </h2>
      <p class="mb-4 text-gray-800 dark:text-white">
        Radicado en la ciudad de Santa Fe en donde asistí a la Universidad
        Tecnológica Nacional, de la cual adquirí conocimientos fundamentales en
        Ingeniería en Sistemas gracias a materias cursadas, proyectos y
        pasantías del área. Con el tiempo he continuado mi aprendizaje de forma
        autodidacta, participando en cursos en línea, lecturas y proyectos
        personales, lo que me ha permitido expandir y aplicar mis habilidades de
        manera continua.
      </p>
      <p class="mb-4 text-gray-900 font-medium dark:text-gray-400">
        Actualmente me desempeño como desarrollador C# .NET / SQL Server en la
        Mutual de Integrantes del Poder Judicial.
      </p>
      <p class="mb-4 text-gray-800 dark:text-white">
        Desarrollo de sistemas empresariales en C#, .NET, Windows Forms, SQL
        Server y Crystal Reports. Con enfoque en la programación orientada a
        objetos, patrones de diseño y la optimización de consultas. Capaz de
        crear servicios web escalables, aplicaciones de escritorio y gestionar
        bases de datos relacionales.
      </p>
      <Experience />
    </div>
  );
});
