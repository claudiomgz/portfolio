import { z } from '@builder.io/qwik-city';

export const contactSchema = z.object({
	name: z
		.string({ description: 'El nombre debe tener entre 3 y 50 caracteres' })
		.min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
		.max(50, { message: 'El nombre debe tener menos de 50 caracteres' }),
	email: z
		.string({ description: 'El email debe ser válido' })
		.email({ message: 'El email debe ser válido' }),
	message: z
		.string({ description: 'El mensaje debe tener entre 10 y 500 caracteres' })
		.min(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
		.max(500, { message: 'El mensaje debe tener menos de 500 caracteres' }),
});

export type ContactForm = z.infer<typeof contactSchema>;
