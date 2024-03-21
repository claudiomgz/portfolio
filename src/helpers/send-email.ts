export const sendEmail = async <T>(values: T) => {
	try {
		const resp = await fetch("http://127.0.0.1:3000/contact", {
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