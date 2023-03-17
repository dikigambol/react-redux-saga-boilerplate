const axios = require('axios');

export const getTitle = () => {
	const URL = 'https://jsonplaceholder.typicode.com/todos';

	return axios.get(URL).then((res) => {
		return res.data;
	});
};
