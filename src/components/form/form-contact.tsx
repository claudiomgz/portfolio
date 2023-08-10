import { component$, useContext, useSignal, useStore, $ } from '@builder.io/qwik';
import { UIContext } from '~/context/ui/ui-context';
import { InitialStateContactForm } from '~/data/seed';
import { sendEmail } from '~/helpers/send-email';
import InputForm from './input-form';

export default component$(() => {
	const formState = useStore(InitialStateContactForm);
	const loading = useSignal(false);

	const { showAlert } = useContext(UIContext);

	const reset = $(() => {
		formState.name = '';
		formState.email = '';
		formState.subject = '';
		formState.message = '';
	});

	const onSubmit = $(async () => {
		loading.value = true;

		const formStateObject = Object.assign({}, formState);

		await sendEmail(formStateObject);

		loading.value = false;

		reset();

		showAlert.value = true;
	});

	return (
		<form onSubmit$={onSubmit} preventdefault:submit>
			<InputForm
				required
				onInput={$((e: Event) => {
					formState.name = (e.target as HTMLInputElement).value;
				})}
				name='name'
				type='text'
				value={formState.name}
				placeholder='Nombre'
			/>

			<InputForm
				required
				onInput={$((e: Event) => {
					formState.email = (e.target as HTMLInputElement).value;
				})}
				name='email'
				type='email'
				value={formState.email}
				placeholder='Correo electrónico'
			/>
			<InputForm
				required
				onInput={$((e: Event) => {
					formState.subject = (e.target as HTMLInputElement).value;
				})}
				name='subject'
				type='text'
				value={formState.subject}
				placeholder='Asunto'
			/>
			<InputForm
				isTextArea
				required
				onInput={$((e: Event) => {
					formState.message = (e.target as HTMLTextAreaElement).value;
				})}
				name='message'
				value={formState.message}
				placeholder='Mensaje'
			/>
			<button
				disabled={loading.value}
				type='submit'
				class='w-full font-semibold py-2 rounded-md border bg-black text-white hover:shadow-xl dark:bg-blue-600 dark:border-none dark:hover:bg-blue-700 dark:hover:text-white disabled:opacity-50 transition-shadow ease-in-out duration-300'
			>
				{loading.value ? 'Enviando...' : 'Enviar'}
			</button>
		</form>
	);
});
