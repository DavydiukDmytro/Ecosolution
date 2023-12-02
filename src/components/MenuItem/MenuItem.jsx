import { ItemMenu, Link, LinkText } from './MenuItem.styled';
import svgSprite from '../../assets/images/svgSprite.svg';

// eslint-disable-next-line react/prop-types
export const MenuItem = ({ element }) => {
	return (
		<ItemMenu>
			<Link href=''>
				<LinkText>{element}</LinkText>
				<svg width={16} height={16}>
					<use xlinkHref={svgSprite + '#icon-arrow'} />
				</svg>
			</Link>
		</ItemMenu>
	);
};
