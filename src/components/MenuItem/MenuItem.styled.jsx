import styled from '@emotion/styled';

export const ItemMenu = styled.li`
	margin-bottom: 8px;
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

export const LinkText = styled.span`
	font-family: 'Sans';
	font-size: 24px;
	letter-spacing: -0.96px;
	margin-right: 8px;
`;
