import { Section } from '../Section';
import {
	Img,
	Item,
	List,
	SubTitle,
	Svg,
	Text,
	TextForTitle,
	Title,
	TitleWrapper,
} from './SectionAbout.styled';
import svgSprite from '../../assets/images/svgSprite.svg';
import windFarmsT1x from '../../assets/images/wind-farms/tablet/wind-farmsT1x.jpg';
import windFarmsT2x from '../../assets/images/wind-farms/tablet/wind-farmsT2x.jpg';
import windFarmsT3x from '../../assets/images/wind-farms/tablet/wind-farmsT3x.jpg';
import windFarmsL1x from '../../assets/images/wind-farms/laptop/wind-farmsL1x.jpg';
import windFarmsL2x from '../../assets/images/wind-farms/laptop/wind-farmsL2x.jpg';
import windFarmsL3x from '../../assets/images/wind-farms/laptop/wind-farmsL3x.jpg';
import solarPanelsT1x from '../../assets/images/solar-panels/tablet/solar-panelsT1x.jpg';
import solarPanelsT2x from '../../assets/images/solar-panels/tablet/solar-panelsT2x.jpg';
import solarPanelsT3x from '../../assets/images/solar-panels/tablet/solar-panelsT3x.jpg';
import solarPanelsL1x from '../../assets/images/solar-panels/laptop/solar-panelsL1x.jpg';
import solarPanelsL2x from '../../assets/images/solar-panels/laptop/solar-panelsL2x.jpg';
import solarPanelsL3x from '../../assets/images/solar-panels/laptop/solar-panelsL3x.jpg';

export const SectionAbout = () => {
	return (
		<Section>
			<TitleWrapper>
				<Title>Main values of our company</Title>
				<TextForTitle>
					EcoSolution envisions a world where sustainable energy solutions power a brighter and
					cleaner future for all. We aspire to be at the forefront of the global shift towards
					renewable energy, leading the way in innovative technologies that harness the power of
					nature to meet the world&apos;s energy needs.
				</TextForTitle>
			</TitleWrapper>
			<List>
				<Item>
					<SubTitle>
						<Svg width={16} height={16}>
							<use xlinkHref={svgSprite + '#icon-maximize-circle'} />
						</Svg>
						Openness
					</SubTitle>
					<Text size={14}>to the world, people, new ideas and projects</Text>
				</Item>
				<Item>
					<SubTitle>
						<Svg width={16} height={16}>
							<use xlinkHref={svgSprite + '#icon-global-edit'} />
						</Svg>
						Responsibility
					</SubTitle>
					<Text size={14}>
						we are aware that the results of our work have an impact on our lives and the lives of
						future generations
					</Text>
				</Item>
				<Item vision={true}>
					<picture>
						<source
							media='(min-width: 768px) and (max-width: 1279px)'
							srcSet={`${windFarmsT1x} 1x, ${windFarmsT2x} 2x, ${windFarmsT3x} 3x`}
						/>
						<source
							media='(min-width: 1280px)'
							srcSet={`${windFarmsL1x} 1x, ${windFarmsL2x} 2x, ${windFarmsL3x} 3x`}
						/>
						<Img src={`${windFarmsL1x}`} alt='Wind turbine clean energy' />
					</picture>
				</Item>
				<Item vision={true}>
					<picture>
						<source
							media='(min-width: 768px) and (max-width: 1279px)'
							srcSet={`${solarPanelsT1x} 1x, ${solarPanelsT2x} 2x, ${solarPanelsT3x} 3x`}
						/>
						<source
							media='(min-width: 1280px)'
							srcSet={`${solarPanelsL1x} 1x, ${solarPanelsL2x} 2x, ${solarPanelsL3x} 3x`}
						/>
						<Img src={`${windFarmsL1x}`} alt='Wind turbine clean energy' />
					</picture>
				</Item>
				<Item>
					<SubTitle>
						<Svg width={16} height={16}>
							<use xlinkHref={svgSprite + '#icon-cpu-charge'} />
						</Svg>
						Innovation
					</SubTitle>
					<Text size={14}>we use the latest technology to implement non-standard solutions</Text>
				</Item>
				<Item>
					<SubTitle>
						<Svg width={16} height={16}>
							<use xlinkHref={svgSprite + '#icon-ranking'} />
						</Svg>
						Quality
					</SubTitle>
					<Text size={14}>
						we do not strive to be the first among others, but we want to be the best in our
						business
					</Text>
				</Item>
			</List>
		</Section>
	);
};
