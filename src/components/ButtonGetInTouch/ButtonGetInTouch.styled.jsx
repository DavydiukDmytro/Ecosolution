import styled from '@emotion/styled';

export const Link = styled.a`
	display: flex;
	align-items: center;
	margin-left: 12px;
	padding: 10px 16px 10px 16px;
	border: none;
	border-radius: 50px;
	background-color: var(--accent);
	cursor: pointer;
	position: relative;

	font-family: 'Sans';
	font-size: 16px;
	letter-spacing: -0.64px;
	color: inherit;

	&:hover,
	&:focus {
		color: var(--accent);
		background-color: var(--primary-text);
	}
	&:hover svg,
	&:focus svg {
		background-color: var(--accent);
	}

	@media (max-width: 767px) {
		position: absolute;
		white-space: nowrap;
		width: 1px;
		height: 1px;
		overflow: hidden;
		border: 0;
		padding: 0;
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		margin: -1px;
	}
`;

export const Svg = styled.svg`
	width: 14px;
	height: 14px;
	margin-left: 12px;
	border-radius: 50%;
	background-color: var(--primary-text);
`;
