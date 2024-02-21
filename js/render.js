const sectionWrapperEl = document.querySelector('.section-wrapper');
const sectionTemplate = document.getElementById('section-template');
const sectionHeadTemplate = document.getElementById('section-head-template');
const sectionBodyTemplate = document.getElementById('section-body-template');
const loadingEl = document.querySelector('.loading');

const removeLoading = () => {
	loadingEl.parentElement.removeChild(loadingEl);
};

export const handleError = (msg) => {
	removeLoading();

	const errorEl = document.createElement('p');
	errorEl.className = 'error';
	errorEl.textContent = msg;

	sectionWrapperEl.appendChild(errorEl);
};

export const renderSectionContent = (data) => {
	const [title, subtitle, image] = data.split('\n');

	const sectionTemplateNode = document.importNode(
		sectionTemplate.content,
		true
	);
	const sectionEl = sectionTemplateNode.querySelector('.section');

	/* [section head] */
	const sectionHeadTemplateNode = document.importNode(
		sectionHeadTemplate.content,
		true
	);
	const sectionHeadEl =
		sectionHeadTemplateNode.querySelector('.section__head');

	const cardIntroTitleEl = sectionHeadEl.querySelector('.card-intro__title');
	const cardIntroTitleSpanEl = cardIntroTitleEl.querySelector('.light');
	cardIntroTitleSpanEl.textContent = title.substring(
		0,
		title.lastIndexOf(' ')
	);
	cardIntroTitleEl.append(title.substring(title.lastIndexOf(' ')));

	const cardIntroSubtitleEl = sectionHeadEl.querySelector(
		'.card-intro__subtitle'
	);
	cardIntroSubtitleEl.textContent = subtitle;

	/* [section body] */
	const sectionBodyTemplateNode = document.importNode(
		sectionBodyTemplate.content,
		true
	);
	const sectionBodyEl =
		sectionBodyTemplateNode.querySelector('.section__body');

	const cardContentImageEl = sectionBodyEl.querySelector(
		'.card-content__image img'
	);
	cardContentImageEl.src = './images/' + image;
	cardContentImageEl.alt = image
		.substring(0, image.indexOf('.'))
		.replace('-', ' ');

	/* [init] */
	removeLoading();
	sectionEl.appendChild(sectionHeadTemplateNode);
	sectionEl.appendChild(sectionBodyTemplateNode);
	sectionWrapperEl.appendChild(sectionTemplateNode);
};
