export const sendEmail = async <T>(values: T) => {
	try {
		const resp = await fetch(`${import.meta.env.PUBLIC_API_URL}/contact`, {
			body: JSON.stringify(values),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await resp.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			return {
				ok: false,
				error: error.message,
			};
		} else {
			return {
				ok: false,
				error: 'Hubo un problema, intente mas tarde!',
			};
		}
	}
};
