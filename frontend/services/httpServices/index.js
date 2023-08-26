import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../../redux";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export function ApiHeaders(headers) {
	// const reduxState = store.getState();
	// const token = process.env.NEXT_PUBLIC_WORDPRESS_ACCESS_TOKEN;
	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";
	return {
		Authorization: "Bearer " + token,
		...headers,
	};
}

export default class HttpServices {
	static async get(endpoint, header) {
		const headers = await ApiHeaders(header);
		const url = `${baseUrl}${endpoint}`;
		return axios({ method: "GET", url, headers });
	}

	static async post(endpoint, header, data = {}) {
		const headers = await ApiHeaders(header);
		const url = baseUrl + endpoint;
		return axios({ method: "POST", url, headers, data });
	}

	static async put(endpoint, header, data = {}) {
		const headers = await ApiHeaders(header);
		const url = `${baseUrl}${endpoint}`;
		return axios({ method: "PUT", url, headers, data });
	}

	static async delete(endpoint, header) {
		const headers = await ApiHeaders(header);
		const url = `${baseUrl}${endpoint}`;
		return axios({ method: "DELETE", url, headers });
	}

	static async patch(endpoint, header, data = {}) {
		const headers = await ApiHeaders(header);
		const url = `${baseUrl}${endpoint}`;
		return axios({ method: "PATCH", url, headers, data });
	}
}
