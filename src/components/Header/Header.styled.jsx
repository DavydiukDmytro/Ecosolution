import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
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
