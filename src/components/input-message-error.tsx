import { component$ } from '@builder.io/qwik';

interface Props {
	className?: string;
	message: string;
}

export default component$(({ className, message }: Props) => {
	return (
		<div>
			<span class={`text-red-500 text-step--2 ${className}`}>{message}</span>
		</div>
	);
});
