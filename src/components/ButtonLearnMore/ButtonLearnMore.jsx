import { Link } from './ButtonLearnMore.styled';
import svgSprite from '../../assets/images/svgSprite.svg';
import { scrollToSection } from '../../utils/scrollToSection';

export const ButtonLearnMore = () => {
	return (
		<Link
			href={`#cases`}
			onClick={(e) => {
				scrollToSection('cases', e);
			}}
		>
			Learn more
			<svg width={32} height={32} style={{ marginLeft: '12px' }}>
				<use xlinkHref={svgSprite + '#icon-arrow-right'} />
			</svg>
		</Link>
	);
};
