import { $, useContext, useSignal } from '@builder.io/qwik';
import { UIContext } from '~/context/ui/ui-context';
import { sendEmail } from '~/helpers/send-email';

export const useForm = <T>(initialState: T) => {
	const { showAlert } = useContext(UIContext);

	const formValues = useSignal<T>(initialState);
	const loading = useSignal(false);

	const reset = $(() => {
		formValues.value = initialState;
	});

	const onSubmit = $(async () => {
		loading.value = true;
		await sendEmail(formValues.value);
		loading.value = false;

		reset();

		showAlert.value = true;
	});

	const onInput = $((e: Event) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

		formValues.value = {
			...formValues.value,
			[name]: value,
		};
	});

	return {
		values: formValues.value,
		loading: loading.value,
		onSubmit,
		onInput,
		reset,
	};
};
