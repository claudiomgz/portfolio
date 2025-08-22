import { component$ } from "@builder.io/qwik";
import { /*routeAction$,*/ type DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type InitialValues } from "@modular-forms/qwik";
import { type ContactForm } from "~/models/contact-form-schema";
//import sgMail from '@sendgrid/mail'

import About from "~/components/about";
import Contact from "~/components/contact";
import Hero from "~/components/hero";
import Project from "~/components/project";

// export const useSendEmail = routeAction$(async (data) => {
//   // This is the Sendgrid API 
//   sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY)

//   // In `to` and `from` we will have to put the email address
//   // that we have verified in Sendgrid
//   const msg = {
//     to: 'claudiomonguzzi80@gmail.com',
//     from: 'claudiomonguzzi80@gmail.com',
//     subject: 'Mensaje desde la página web',
//     text: data.message,
//     html: `Nuevo mensaje de: ${data.name} (${data.email}):<br/><br/>${data.message}`,
//   }

//   //@ts-ignore
//   await sgMail.send(msg).then(
//     () => {
//       console.log('Message sent')
//     },
//     (error) => {
//       console.error(error)

//       if (error.response) {
//         console.error(error.response.body)
//       }
//     }
//   )
// })

export const useContactFormLoader = routeLoader$<InitialValues<ContactForm>>(
  () => ({
    name: "",
    email: "",
    message: "",
  })
);

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: "Claudio Monguzzi | Desarrollador Fullstack",
  meta: [
    {
      name: "author",
      content: "Claudio Monguzzi",
    },
    {
      name: "description",
      content: "Desarrollador Fullstack.",
    },
    {
      name: "keywords",
      content:
        "Claudio Monguzzi, desarrollador santa fe, Claudio Monguzzi Desarrollador, Claudio Developer, Monguzzi, Claudio, Backend, Fullstack Developer, Desarrollador Fullstack, C#, .NET, Node.js, SQL Server, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind, APIs REST, Servicios Web, Programación Orientada a Objetos, Patrones de Diseño, Optimización de Consultas, Bases de Datos Relacionales, Aprendizaje Continuo",
    },
    {
      name: "og:title",
      content: "Claudio Monguzzi | Desarrollador Fullstack",
    },
    {
      name: "og:description",
      content:
        "Desarrollador con experiencia en C# .NET, Node.js y SQL Server, con enfoque en la programación orientada a objetos, patrones de diseño y la optimización de consultas. Capaz de crear servicios web, aplicaciones de escritorio y gestionar bases de datos relacionales. Comprometido con el aprendizaje continuo y adaptación a las últimas tecnologías.",
    },
    {
      name: "og:image",
      content: "/imgs/preview.webp",
    },
  ],
};
