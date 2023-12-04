import styled from '@emotion/styled';

export const Title = styled.h2`
	font-family: 'Oswald';
	font-size: 28px;
	font-weight: 400;
	text-transform: uppercase;
	padding-bottom: 24px;

	@media (min-width: 768px) {
		display: inline-block;
		width: 368px;
		font-size: 36px;
	}

	@media (min-width: 1280px) {
		display: inline-block;
		width: 491px;
		font-size: 48px;
		padding-bottom: 16px;
	}
`;

export const Counter = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 24px;
	margin-top: 48px;

	font-family: 'Oswald';
	font-size: 48px;
	font-weight: bold;
	text-transform: uppercase;
	color: var(--accent);

	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		background-color: var(--accent);
		height: 48px;
		width: 1px;
	}

	@media (min-width: 768px) {
		margin-top: 87px;
		font-size: 100px;

		&::before {
			height: 87px;
		}
	}

	@media (min-width: 1280px) {
		padding-top: 16px;
		font-size: 164px;
	}
`;

export const Units = styled.span`
	margin-left: 8px;
	font-family: 'Oswald';
	font-size: 24px;
	font-weight: normal;
	color: var(--primary-text);
	text-transform: none;

	@media (min-width: 768px) {
		margin-left: 24px;
	}

	@media (min-width: 1280px) {
		font-size: 48px;
	}
`;
