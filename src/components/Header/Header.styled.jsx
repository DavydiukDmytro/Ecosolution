import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 128px;

	@media (min-width: 768px) {
		margin-bottom: 114px;
	}
	@media (min-width: 1280px) {
		margin-bottom: 140px;
	}
`;

export const ButtonList = styled.ul`
	display: flex;
`;

export const ButtonMenu = styled.button`
	width: 40px;
	height: 40px;
	padding: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 50%;
	background-color: var(--secondary-accent);
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: var(--accent);
	}
`;
