import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type InitialValues } from "@modular-forms/qwik";
import { type ContactForm } from "~/models/contact-form-schema";
import sgMail from '@sendgrid/mail'

import About from "~/components/about";
import Contact from "~/components/contact";
import Hero from "~/components/hero";
import Project from "~/components/project";

export const useSendEmail = routeAction$(async (data) => {
  // This is the Sendgrid API 
  sgMail.setApiKey('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')

  // In `to` and `from` we will have to put the email address
  // that we have verified in Sendgrid
  const msg = {
    to: 'claudiomonguzzi80@gmail.com',
    from: 'claudiomonguzzi80@gmail.com',
    subject: 'Mensaje desde la página web',
    text: data.message,
    html: `Nuevo mensaje de: ${data.name} (${data.email}):<br/><br/>${data.message}`,
  }

  //@ts-ignore
  await sgMail.send(msg).then(
    () => {
      console.log('Message sent')
    },
    (error) => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  )
})

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
  title: "Claudio Monguzzi | Developer",
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
        "Claudio Monguzzi, desarrollador santa fe, Claudio Monguzzi Desarrollador, Claudio Developer, Monguzzi, Claudio, Backend, Fullstack Developer",
    },
    {
      name: "og:title",
      content: "Claudio Monguzzi | Developer",
    },
    {
      name: "og:description",
      content:
        "Desarrollador con experiencia en C#, Node.js y SQL Server, con enfoque en la programación orientada a objetos, patrones de diseño y la optimización de consultas. Capaz de crear servicios web, aplicaciones de escritorio y gestionar bases de datos relacionales. Comprometido con el aprendizaje continuo y adaptación a las últimas tecnologías.",
    },
    {
      name: "og:image",
      content: "/imgs/preview.webp",
    },
  ],
};
