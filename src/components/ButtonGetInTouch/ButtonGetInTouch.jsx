import { Button, Svg } from './ButtonGetInTouch.styled';
import svgSprite from '../../assets/images/svgSprite.svg';

export const ButtonGetInTouch = () => {
	return (
		<Button type='button'>
			Get In touch
			<Svg>
				<use xlinkHref={svgSprite + '#icon-arrow-down'} />
			</Svg>
		</Button>
	);
};
