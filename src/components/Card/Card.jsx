import PropTypes from 'prop-types';
import { Svg } from '../SectionCases/SectionCases.styled';
import {
	CardWrapper,
	Description,
	Img,
	Link,
	Location,
	Text,
	WrapperInfo,
	WrapperLink,
} from './Card.styled';
import svgSprite from '../../assets/images/svgSprite.svg';

export const Card = ({ item }) => {
	return (
		<CardWrapper>
			<picture>
				<source srcSet={`${item.x1} 1x, ${item.x2} 2x, ${item.x3} 3x`} />
				<Img src={`${item.x1}`} alt={`${item.alt}`} />
			</picture>
			<Description>
				<WrapperLink>
					<Location>{`${item.location}`}</Location>
					<Link>
						<Svg width={28} height={28}>
							<use xlinkHref={svgSprite + '#icon-arrow-tr'} />
						</Svg>
					</Link>
				</WrapperLink>
				<WrapperInfo>
					<Text>{`${item.name}`}</Text>
					<Text>{`${item.date}`}</Text>
				</WrapperInfo>
			</Description>
		</CardWrapper>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		x1: PropTypes.string.isRequired,
		x2: PropTypes.string.isRequired,
		x3: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
	}).isRequired,
};
