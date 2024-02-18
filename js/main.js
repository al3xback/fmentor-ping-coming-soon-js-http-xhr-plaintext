import { sendHttpRequest } from './util.js';

const URL =
	'https://gista.githubusercontent.com/al3xback/3d916fea9364f05e3e14daa79be8b1e5/raw/f2bb685c32bf8e238231e9293d91ee5d506dd765/ping-coming-soon-data.txt';

const sectionWrapperEl = document.querySelector('.section-wrapper');
const sectionTemplate = document.getElementById('section-template');
const loadingEl = document.querySelector('.loading');

const removeLoading = () => {
	loadingEl.parentElement.removeChild(loadingEl);
};

const handleError = (msg) => {
	removeLoading();

	const errorEl = document.createElement('p');
	errorEl.className = 'error';
	errorEl.textContent = msg;

	sectionWrapperEl.appendChild(errorEl);
};

const renderSectionContent = (data) => {
	const [title, subtitle, imageInfo] = data.split('\n');
	const [imageSrc, imageAlt] = imageInfo.split(' | ');

	const sectionTemplateNode = document.importNode(
		sectionTemplate.content,
		true
	);
	const sectionEl = sectionTemplateNode.querySelector('.section');

	const cardIntroTitleEl = sectionEl.querySelector('.card-intro__title');
	const cardIntroTitleSpanEl = cardIntroTitleEl.querySelector('.light');
	cardIntroTitleSpanEl.textContent = title.substring(
		0,
		title.lastIndexOf(' ')
	);
	cardIntroTitleEl.append(title.substring(title.lastIndexOf(' ')));

	const cardIntroSubtitleEl = sectionEl.querySelector(
		'.card-intro__subtitle'
	);
	cardIntroSubtitleEl.textContent = subtitle;

	const cardContentImageEl = sectionEl.querySelector(
		'.card-content__image img'
	);
	cardContentImageEl.src = './images/' + imageSrc;
	cardContentImageEl.alt = imageAlt;

	removeLoading();
	sectionWrapperEl.appendChild(sectionTemplateNode);
};

sendHttpRequest('GET', URL, renderSectionContent, handleError);
