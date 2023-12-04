import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
	padding: 18px 0;

	@media (min-width: 768px) {
		padding: 50px 0;
	}

	@media (min-width: 1280px) {
		padding: 60px 0;
	}

	${({ center }) => center && `text-align: center;`}
`;
