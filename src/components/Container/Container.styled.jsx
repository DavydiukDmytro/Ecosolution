import styled from '@emotion/styled';

export const ContainerMain = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: 36px 20px 24px 20px;
	${({ menu }) => menu && 'height: 100%; width: 100%;'};

	@media (max-width: 767px) {
		max-width: var(--mobile);
	}

	@media (min-width: 768px) {
		width: var(--tablet);
		padding: 36px 30px 40px 30px;
	}

	@media (min-width: 1280px) {
		width: var(--laptop);
		padding: 24px 20px 40px 20px;
	}
`;
