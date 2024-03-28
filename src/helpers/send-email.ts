export const sendEmail = async <T>(values: T) => {
	try {
		const resp = await fetch("https://sendemail-back.onrender.com/contact", {
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