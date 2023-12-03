import styled from '@emotion/styled';

export const MainWrapper = styled.div`
	border-bottom: 1px solid var(--accent);
	padding-bottom: 24px;
	margin-bottom: 24px;

	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	@media (min-width: 1280px) {
		margin-bottom: 12px;
	}
`;

export const Title = styled.h1`
	font-family: 'Oswald';
	font-size: 36px;
	font-weight: 400;
	text-transform: uppercase;
	margin-bottom: 24px;

	@media (min-width: 768px) {
		display: inline-block;
		width: 300px;
		font-size: 48px;
		margin-bottom: 0;
	}

	@media (min-width: 1280px) {
		display: inline-block;
		width: 485px;
		font-size: 64px;
		margin-bottom: 0;
	}
`;

export const LearnMoreWrapper = styled.div`
	@media (min-width: 768px) {
		width: 100%;
		max-width: 342px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	@media (min-width: 1280px) {
		width: 100%;
		max-width: 363px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const Text = styled.p`
	display: inline-block;
	font-size: 16px;
	letter-spacing: -0.63px;
	text-align: justify;

	${({ center }) => center && 'text-align: center;'}
`;

export const List = styled.ul`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

export const Item = styled.li`
	margin-top: 8px;

	&:first-of-type {
		margin-top: 0;
	}

	&:last-child {
		@media (max-width: 768px) {
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
	}

	@media (min-width: 768px) {
		margin: 0;
	}
`;

export const Img = styled.img`
	margin-top: 36px;
	display: block;
	max-width: 100%;
	height: auto;

	@media (min-width: 768px) {
		margin-top: 40px;
	}

	@media (min-width: 1280px) {
		margin-top: 36px;
	}
`;
