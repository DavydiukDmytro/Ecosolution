import { Link, Svg } from './ButtonGetInTouch.styled';
import svgSprite from '../../assets/images/svgSprite.svg';

export const ButtonGetInTouch = () => {
	return (
		<Link href='#contact'>
			Get In touch
			<Svg>
				<use xlinkHref={svgSprite + '#icon-arrow-down'} />
			</Svg>
		</Link>
	);
};
