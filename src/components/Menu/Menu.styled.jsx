import styled from '@emotion/styled';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(23, 61, 51, 0.25);
	backdrop-filter: blur(2px);
	z-index: 1200;
`;

export const ContainerModal = styled.div`
	position: absolute;
	top: 36px;
	max-width: 320px;
	width: 100%;
	max-height: 701px;
	height: calc(100% - 60px);
	padding: 24px;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 25px;
	background: rgba(23, 61, 51, 0.75);
	backdrop-filter: blur(12.5px);
	overflow: hidden;

	@media (min-width: 768px) {
		right: calc(50% - 354px);
	}

	@media (min-width: 1280px) {
		top: 24px;
		right: calc(50% - 540px);
		max-width: 365px;
		max-height: 873px;
	}
`;

export const ButtonClose = styled.button`
	position: relative;
	width: 100%;
	padding: 0;
	padding-bottom: 8px;
	margin-bottom: 24px;
	display: flex;
	align-items: end;
	justify-content: start;
	color: var(--white);
	stroke: var(--white);
	background-color: initial;
	border: none;
	cursor: pointer;

	&:hover,
	&:focus {
		color: var(--accent);
		stroke: var(--accent);
		fill: var(--accent);
	}

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--white);
		height: 1px;
		width: 100%;
	}
`;
export const ButtonCloseText = styled.span`
	padding: 0;
	font-family: 'Sans';
	font-size: 20px;
	letter-spacing: -0.8px;
`;

export const ListLink = styled.ul`
	display: flex;
`;

export const ItemLink = styled.li`
	height: 24px;
	&:not(:last-child) {
		margin-right: 8px;
	}
`;

export const Link = styled.a`
	height: 24px;
	stroke: var(--white);
	fill: var(--white);
	color: var(--white);

	${({ socialLink }) => socialLink && `display: inline-block; width: 24px; height: 24px`}

	&:hover,
	&:focus {
		color: var(--accent);
		stroke: var(--accent);
		fill: var(--accent);
	}
`;

export const Svg = styled.svg`
	&:hover,
	&:focus {
		color: var(--accent);
		stroke: var(--accent);
		fill: var(--accent);
	}
`;
