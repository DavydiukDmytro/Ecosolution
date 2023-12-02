import { AccentText, LogoContainer, LogoSpan, LogoTitle } from './Logo.styled';
import svgSprite from '../../assets/images/svgSprite.svg';

export const Logo = () => {
	return (
		<LogoContainer>
			<svg width={31} height={18}>
				<use xlinkHref={svgSprite + '#icon-logo'} />
			</svg>
			<LogoTitle>ecosolution</LogoTitle>
			<LogoSpan>
				<AccentText>green</AccentText>ergy <br /> for life
			</LogoSpan>
		</LogoContainer>
	);
};
