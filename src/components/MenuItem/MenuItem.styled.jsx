import styled from '@emotion/styled';

export const ItemMenu = styled.li`
	margin-bottom: 8px;
`;

export const Link = styled.a`
	height: 24px;
	stroke: rgba(255, 255, 255, 0.25);
	fill: rgba(255, 255, 255, 0.25);
	color: rgba(255, 255, 255, 0.25);

	${({ socialLink }) => socialLink && `display: inline-block; width: 24px; height: 24px`}
	${({ active }) =>
		active &&
		`color: var(--accent);
		stroke: var(--accent);
		fill: var(--accent);`}
		
	&:hover,
	&:focus {
		color: var(--white);
		stroke: var(--white);
		fill: var(--white);
	}
`;

export const LinkText = styled.span`
	font-family: 'Sans';
	font-size: 24px;
	letter-spacing: -0.96px;
	margin-right: 8px;
`;
