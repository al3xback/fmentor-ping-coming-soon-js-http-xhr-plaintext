import { sendHttpRequest } from './util.js';
import { renderSectionContent, handleError } from './render.js';
import { initForm } from './form.js';

const URL =
	'https://gist.githubusercontent.com/al3xback/3d916fea9364f05e3e14daa79be8b1e5/raw/1a4f5c573e675f1c02125de55bde821a410d58e8/ping-coming-soon-data.txt';

sendHttpRequest('GET', URL)
	.then((response) => {
		renderSectionContent(response);
		initForm();
	})
	.catch((err) => {
		handleError(err);
	});
