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
  sgMail.setApiKey(import.meta.env.PUBLIC_SENDGRID_API_KEY);

  // In `to` and `from` we will have to put the email address
  // that we have verified in Sendgrid
  const msg = {
    to: import.meta.env.PUBLIC_EMAIL_TO_ADDRESS,
    from: import.meta.env.PUBLIC_EMAIL_FROM_ADDRESS,
    subject: "A New Message From Cool Form",
    text: data.message,
    html: `You have a new message from ${data.name} (${data.email}) regarding <strong>${data.subject}</strong>:<br/><br/>${data.message}`,
  };

  //@ts-ignore
  await sgMail.send(msg).then(
    () => {
      console.log("Message sent");
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
});

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
        "Claudio Monguzzi Desarrollador, Claudio Developer, Monguzzi, Claudio, Backend, Fullstack Developer",
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
