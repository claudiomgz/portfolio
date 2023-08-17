import { component$ } from '@builder.io/qwik';
import { type Maybe } from '@modular-forms/qwik';

import InputMessageError from '~/components/input-message-error';

interface Props {
	className?: string;
	isTextArea?: boolean;
	placeholder?: string;
	type?: string;
	value: Maybe<string>;
	error: string;
	[key: string]: any;
}

export default component$(
	({ type, value, placeholder, className, isTextArea, error, ...props }: Props) => {
		return isTextArea ? (
			<div class='mb-4'>
				<textarea
					{...props}
					autoComplete='off'
					rows={5}
					value={value}
					placeholder={placeholder}
					class={`border outline-none resize-none border-pallete-light-gray rounded-md w-full p-2 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500 transition ease-in-out duration-200 ${className}`}
				/>
				{error && <InputMessageError message={error} />}
			</div>
		) : (
			<div class='mb-4'>
				<input
					{...props}
					autoComplete='off'
					type={type}
					value={value}
					placeholder={placeholder}
					class={`border outline-none border-pallete-light-gray rounded-md w-full p-2 placeholder:text-sm placeholder:text-pallete-light-gray hover:border-pallete-gray dark:placeholder:bg-dark-input dark:bg-dark-input dark:placeholder:text-gray-400 dark:border-gray-500 dark:hover:border-gray-500 dark:text-white dark:focus:border-blue-500 transition ease-in-out duration-200 ${className}`}
				/>
				{error && <InputMessageError message={error} />}
			</div>
		);
	}
);
