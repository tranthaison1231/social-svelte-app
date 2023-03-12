import { z } from 'zod';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

const registerSchema = z.object({
	title: z
		.string({ required_error: 'Title is required' })
		.min(1, { message: 'Title is required' })
		.trim(),
	date: z
		.string({ required_error: 'Date is required' })
		.min(1, { message: 'Date is required' })
		.trim(),
	time: z
		.string({ required_error: 'Time is required' })
		.min(1, { message: 'Time is required' })
		.trim(),
	venue: z
		.string({ required_error: 'Venue is required' })
		.min(1, { message: 'Venue is required' })
		.trim()
});

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		const result = registerSchema.safeParse(data);
		if (!result.success) {
			return fail(400, { errors: result.error.flatten().fieldErrors });
		}
	}
} satisfies Actions;
