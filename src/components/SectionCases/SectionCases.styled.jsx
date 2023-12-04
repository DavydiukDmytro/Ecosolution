import styled from '@emotion/styled';

export const WrapperTitle = styled.div`
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		margin-bottom: 32px;
	}
	@media (min-width: 1280px) {
		margin-bottom: 120px;
	}
`;

export const NavigationSlider = styled.div`
	display: flex;
	justify-content: space-between;
	height: 73px;
	margin-bottom: 19px;
	align-items: flex-end;
	@media (min-width: 768px) {
		padding-left: 9px;
		border-left: 1px solid var(--accent);
		margin-bottom: 0px;
	}

	@media (min-width: 1280px) {
		padding-left: 161px;
	}
`;

export const CounterText = styled.p`
	display: flex;
	width: 80px;
	font-size: 28px;
	font-weight: 300;
	letter-spacing: -1.12px;
	@media (min-width: 768px) {
		margin-right: 126px;
	}

	@media (min-width: 1280px) {
		margin-right: 193px;
	}
`;

export const CounterTextSpan = styled.span`
	color: rgba(23, 61, 51, 0.25);
`;

export const NavigationButton = styled.div`
	display: flex;
	align-self: flex-start;
`;

export const Button = styled.button`
	display: flex;
	text-align: center;
	justify-content: center;
	border-radius: 100%;
	padding: 14px;
	border: 1px solid var(--primary-text);
	background-color: inherit;
	stroke: var(--primary-text);
	cursor: pointer;

	@media (min-width: 1280px) {
		padding: 24px;
	}

	&:last-child {
		margin-left: 12px;
	}

	&:hover,
	&:focus {
		stroke: var(--accent);
		border-color: var(--accent);
	}
`;

export const Svg = styled.svg`
	fill: none;

	&:hover,
	&:focus {
		stroke: var(--accent);
	}
`;

export const SliderWrapper = styled.div`
	overflow: hidden;
	@media (min-width: 768px) {
		width: 707px;
	}

	@media (min-width: 1280px) {
		width: 1239px;
	}
`;
