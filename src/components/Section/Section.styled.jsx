import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
	padding: 18px 0px;

	@media (min-width: 768px) {
		padding: 50px 0;
		${({ hero }) => hero && `padding-top: 240px`}
	}

	@media (min-width: 1280px) {
		padding: 60px 0;
		${({ hero }) => hero && `padding-top: 264px`}
	}

	${({ hero }) => hero && `padding-top: 222px`}
	${({ center }) => center && `text-align: center;`}
`;
