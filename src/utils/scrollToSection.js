export const scrollToSection = (element, e) => {
	e.preventDefault();

	const sectionId = element.toLowerCase();
	const section = document.getElementById(sectionId);

	if (section) {
		const offset = section.offsetTop - 70;
		window.scrollTo({
			top: offset,
			behavior: 'smooth',
		});
	}
};
