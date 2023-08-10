import { type QRL, component$ } from '@builder.io/qwik';

interface Props {
	className?: string;
	isTextArea?: boolean;
	name: string;
	onInput: QRL<(e: Event) => void>;
	placeholder?: string;
	required?: boolean;
	type?: string;
	value: string;
}

export default component$(
	({ required, onInput, name, type, value, placeholder, className, isTextArea }: Props) => {
		return isTextArea ? (
			<textarea
				required={required}
				onInput$={onInput}
				autoComplete='off'
				name={name}
				rows={5}
				value={value}
				placeholder={placeholder}
				class={`border outline-none resize-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500 transition ease-in-out duration-300 ${className}`}
			/>
		) : (
			<input
				required={required}
				onInput$={onInput}
				autoComplete='off'
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				class={`border outline-none border-pallete-light-gray rounded-md w-full p-2 mb-4 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500 transition ease-in-out duration-300 ${className}`}
			/>
		);
	}
);
