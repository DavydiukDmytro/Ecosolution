import { LogoContainer, LogoSpan, LogoSpanAccent, LogoTitle } from './Logo.styled';
import LogoSvg from '../../assets/images/logo.svg';

export const Logo = () => {
	return (
		<LogoContainer>
			<img src={LogoSvg} alt='Logo' width={31} />
			<LogoTitle>ecosolution</LogoTitle>
			<LogoSpan>
				<LogoSpanAccent>green</LogoSpanAccent>ergy <br /> for life
			</LogoSpan>
		</LogoContainer>
	);
};
