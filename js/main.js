import { sendHttpRequest } from './util.js';
import { renderSectionContent, handleError } from './render.js';
import { initForm } from './form.js';

const URL =
	'https://gist.githubusercontent.com/al3xback/3d916fea9364f05e3e14daa79be8b1e5/raw/f2bb685c32bf8e238231e9293d91ee5d506dd765/ping-coming-soon-data.txt';

sendHttpRequest('GET', URL)
	.then((response) => {
		renderSectionContent(response);
		initForm();
	})
	.catch((err) => {
		handleError(err);
	});
