import { Button } from './ButtonLearnMore.styled';
import svgSprite from '../../assets/images/svgSprite.svg';

export const ButtonLearnMore = () => {
	return (
		<Button type='button'>
			Learn more
			<svg width={32} height={32} style={{ marginLeft: '12px' }}>
				<use xlinkHref={svgSprite + '#icon-arrow-right'} />
			</svg>
		</Button>
	);
};
