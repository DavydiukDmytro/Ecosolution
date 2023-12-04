import { ItemMenu, Link, LinkText } from './MenuItem.styled';
import svgSprite from '../../assets/images/svgSprite.svg';
import PropTypes from 'prop-types';

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

MenuItem.propTypes = {
	element: PropTypes.string.isRequired,
};
