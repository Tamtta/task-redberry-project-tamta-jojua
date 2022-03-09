const API = "https://bootcamp-2022.devtest.ge/api/";

const header = {
	headers: {
		"Content-Type": "application/json",
	},
};

export function getSkills() {
	return fetch(API + "skills", header).then((response) => response.json());
}

export function getApplications(token) {
	return fetch(API + `applications?token=${token}`, header).then((response) =>
		response.json(),
	);
}

export function postApplication(data) {
	return fetch(API + "application", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
}
