import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 360px;
	padding: 36px 20px 8px 20px;
	display: flex;
	justify-content: space-between;
	background-color: var(--primary-bg);
	z-index: 1200;

	@media (min-width: 768px) {
		width: var(--tablet);
		padding: 36px 30px 8px 30px;
	}

	@media (min-width: 1280px) {
		width: var(--laptop);
		padding: 24px 20px 8px 20px;
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
