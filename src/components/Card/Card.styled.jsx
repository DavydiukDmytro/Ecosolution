import styled from '@emotion/styled';

export const CardWrapper = styled.div`
	@media (min-width: 768px) {
		width: 342px;
	}

	@media (min-width: 1280px) {
		width: 596px;
	}
`;

export const Img = styled.img`
	display: block;
	max-width: 100%;
	height: 168px;

	@media (min-width: 768px) {
		width: 342px;
	}
	@media (min-width: 1280px) {
		width: 596px;
		height: 296px;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 12px;
	padding-top: 24px;

	@media (min-width: 768px) {
		width: 342px;
		height: 153px;
	}

	@media (min-width: 1280px) {
		width: 596px;
		height: 210px;
		padding: 36px 48px;
	}
`;

export const WrapperLink = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 21px;

	@media (min-width: 1280px) {
		margin-bottom: 0;
	}
`;

export const Location = styled.h3`
	width: 175px;
	font-size: 18px;
	font-weight: normal;
	letter-spacing: -0.72px;

	@media (min-width: 768px) {
		font-size: 20px;
		width: 220px;
	}

	@media (min-width: 1280px) {
		font-size: 24px;
		width: 360px;
		letter-spacing: -0.96px;
	}
`;

export const Link = styled.a`
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 16px;
	border: none;
	background-color: var(--accent);
	border-radius: 100%;
	stroke: var(--primary-text);

	&:hover,
	&:focus {
		background-color: var(--primary-text);
		stroke: var(--accent);
	}
`;

export const WrapperInfo = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 12px;
	border-top: 1px solid var(--accent);

	@media (min-width: 1280px) {
		padding-top: 24px;
	}
`;

export const Text = styled.p`
	font-size: 12px;
	font-weight: normal;
	letter-spacing: -0.48px;

	@media (min-width: 768px) {
		font-size: 14px;
	}

	@media (min-width: 1280px) {
		font-size: 16px;
	}
`;
