import styled from '@emotion/styled';

export const Link = styled.a`
	display: flex;
	align-items: center;
	margin-top: 24px;
	margin-left: auto;
	margin-right: auto;
	padding: 4px 4px 4px 16px;
	border-radius: 50px;
	border: 1px solid var(--accent);
	background-color: inherit;

	color: var(--primary-text);
	font-size: 16px;
	letter-spacing: 1.1;
	line-height: 18px;

	&:hover,
	&:focus {
		color: var(--accent);
		border: 1px solid var(--primary-text);
		background-color: var(--primary-text);
	}

	@media (min-width: 768px) {
		margin-left: 0;
		margin-top: 0;
	}
`;
