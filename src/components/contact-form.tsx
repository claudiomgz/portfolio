import { $, component$, useContext  } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
//import { useSendEmail } from "~/routes/index";
import { UIContext } from "~/context/ui/ui-context";

export default component$(() => {
  //const sendEmailAction = useSendEmail();
  const { showAlert } = useContext(UIContext);

  const resetForm = $(async (form: HTMLFormElement) => {
    form.reset();
    showAlert.value = true;
  });

  return (
    <Form
      //action={sendEmailAction}
      class="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmitCompleted$={(event) => {
        resetForm(event.target as HTMLFormElement);
      }}
    >
      {/* // Name  */}
      <div class="flex flex-col gap-2">
        <label for="name"></label>
        <input
          required
          class="border border-black rounded-md px-4 py-2"
          name="name"
          type="text"
          placeholder="Ingrese su nombre"
        />
      </div>

      {/* // Email  */}
      <div class="flex flex-col gap-2">
        <label for="email"></label>
        <input
          required
          class="border border-black rounded-md px-4 py-2"
          name="email"
          type="email"
          placeholder="Ingrese su email"
        />
      </div>

      {/* // Message  */}
      <div class="flex flex-col gap-2">
        <label for="message"></label>
        <textarea
          required
          rows={4}
          class="border border-black rounded-md px-4 py-2"
          name="message"
          placeholder="Ingrese su mensaje"
        />
      </div>

      <button
        class="w-full font-semibold py-2 rounded-md border bg-black text-white hover:shadow-xl dark:bg-blue-600 dark:border-none dark:hover:bg-blue-700 dark:hover:text-white disabled:opacity-50 transition ease-in-out duration-200"
        type="submit"
      >
        Enviar
      </button>
    </Form>
  );
});

//VIEJO FORMULARIO
//---------------------------------------------------------------------------------//
// import { $, type QRL, component$, useContext } from "@builder.io/qwik";
// import type { SubmitHandler } from "@modular-forms/qwik";
// import { reset, useForm, zodForm$ } from "@modular-forms/qwik";

// import { useContactFormLoader } from "~/routes";
// import { UIContext } from "~/context/ui/ui-context";
// import { type ContactForm, contactSchema } from "~/models/contact-form-schema";
// import { sendEmail } from "~/helpers/send-email";
// import InputForm from "~/components/input-form";

// export default component$(() => {
//   const { showAlert } = useContext(UIContext);

//   const [contactForm, { Form, Field }] = useForm<ContactForm>({
//     loader: useContactFormLoader(),
//     validate: zodForm$(contactSchema),
//   });

//   const handleSubmit: QRL<SubmitHandler<ContactForm>> = $(
//     async (values: ContactForm) => {
//       await sendEmail(values);
//       reset(contactForm);
//       showAlert.value = true;
//     }
//   );

//   return (
//     <Form onSubmit$={handleSubmit}>
//       <Field name="name">
//         {(field, props) => (
//           <InputForm
//             {...props}
//             type="text"
//             value={field.value}
//             placeholder="Ingrese su nombre"
//             error={field.error}
//           />
//         )}
//       </Field>
//       <Field name="email">
//         {(field, props) => (
//           <InputForm
//             {...props}
//             type="email"
//             value={field.value}
//             placeholder="Ingrese su email"
//             error={field.error}
//           />
//         )}
//       </Field>
//       <Field name="message">
//         {(field, props) => (
//           <InputForm
//             isTextArea
//             {...props}
//             value={field.value}
//             placeholder="Ingrese su mensaje"
//             error={field.error}
//           />
//         )}
//       </Field>
//       <button
//         disabled={contactForm.submitting}
//         class="w-full font-semibold py-2 rounded-md border bg-black text-white hover:shadow-xl dark:bg-blue-600 dark:border-none dark:hover:bg-blue-700 dark:hover:text-white disabled:opacity-50 transition ease-in-out duration-200"
//         type="submit"
//       >
//         Enviar
//       </button>
//     </Form>
//   );
// });
