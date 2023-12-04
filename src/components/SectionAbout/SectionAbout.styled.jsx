import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	@media (min-width: 1280px) {
		align-items: center;
	}
`;

export const Title = styled.h2`
	display: inline-block;
	width: 270px;
	font-family: 'Oswald';
	font-size: 28px;
	font-weight: 400;
	text-transform: uppercase;
	margin-bottom: 24px;

	@media (min-width: 768px) {
		display: inline-block;
		width: 300px;
		font-size: 36px;
		margin-bottom: 0;
	}

	@media (min-width: 1280px) {
		display: inline-block;
		width: 485px;
		font-size: 48px;
		margin-bottom: 0;
	}
`;

export const TextForTitle = styled.p`
	display: inline-block;
	font-size: 16px;
	letter-spacing: -0.63px;
	text-align: justify;

	@media (min-width: 768px) {
		max-width: 353px;
		padding-left: 11px;
		border-left: 1px solid var(--accent);
	}

	@media (min-width: 1280px) {
		max-width: 620px;
		padding-left: 161px;
		border-left: 1px solid var(--accent);
	}
`;

export const List = styled.ul`
	margin-top: 36px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 24px;
	grid-row-gap: 24px;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		margin-top: 100px;
	}

	@media (min-width: 1280px) {
		grid-column-gap: 48px;
		grid-row-gap: 48px;
		margin-top: 124px;
	}
`;

export const Item = styled.li`
	padding: 13px 12px;
	height: 197px;

	@media (max-width: 767px) {
		${({ vision }) =>
			vision &&
			`position: absolute;
			white-space: nowrap;
			width: 1px;
			height: 1px;
			overflow: hidden;
			border: 0;
			padding: 0;
			clip: rect(0 0 0 0);
			clip-path: inset(50%);
			margin: -1px;`}
	}

	@media (min-width: 1280px) {
		padding: 48px 24px;
		height: 339px;

		${({ vision }) => vision && `padding: 0;`}
	}

	${({ vision }) => vision && `grid-column: span 2; padding: 0;`}
`;

export const SubTitle = styled.h3`
	display: flex;
	align-items: center;
	padding-bottom: 33px;
	margin-bottom: 12px;
	border-bottom: 1px solid var(--accent);

	font-family: 'Oswald';
	font-size: 16px;
	line-height: 1.5;
	font-weight: normal;
	text-transform: uppercase;

	@media (min-width: 768px) {
		font-size: 18px;
		padding-bottom: 51px;
		line-height: 1.3;
	}

	@media (min-width: 1280px) {
		font-size: 32px;
		padding-bottom: 94px;
		line-height: 1.5;
	}
`;

export const Svg = styled.svg`
	stroke: #173d33;
	fill: none;
	margin-right: 8px;

	@media (min-width: 1280px) {
		width: 24px;
		height: 24px;
	}
`;

export const Text = styled.p`
	display: inline-block;
	font-size: 14px;
	letter-spacing: -0.63px;
	text-align: justify;

	@media (min-width: 1280px) {
		font-size: 16px;
	}
`;

export const Img = styled.img`
	display: block;
	max-width: 100%;
	height: auto;
`;
