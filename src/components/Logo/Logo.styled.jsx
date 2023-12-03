import styled from '@emotion/styled';

export const LogoContainer = styled.a`
	color: var(--primary-text);
`;

export const LogoTitle = styled.span`
	font-family: 'Gothic';
	font-size: 33px;
	font-weight: bold;
	margin: 0 4px;
	letter-spacing: -1px;

	&:hover,
	&:focus {
		color: var(--accent);
	}
`;

export const LogoSpan = styled.span`
	display: inline-block;
	font-family: 'Saygon';
	font-size: 10px;
	line-height: 1.1;
	text-transform: uppercase;
`;

export const AccentText = styled.span`
	color: var(--accent);
`;
