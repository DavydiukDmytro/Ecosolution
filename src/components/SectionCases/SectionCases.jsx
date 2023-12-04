import { Component } from 'react';
import { Section } from '../Section';
import { Title } from '../SectionAbout/SectionAbout.styled';
import windTurbinesGrassCovered1x from '../../assets/images/wind-turbines-grass-covered/wind-turbines-grass-covered1x.jpg';
import windTurbinesGrassCovered2x from '../../assets/images/wind-turbines-grass-covered/wind-turbines-grass-covered2x.jpg';
import windTurbinesGrassCovered3x from '../../assets/images/wind-turbines-grass-covered/wind-turbines-grass-covered3x.jpg';
import manySolarPanels1x from '../../assets/images/many-solar-panels/many-solar-panels1x.jpg';
import manySolarPanels2x from '../../assets/images/many-solar-panels/many-solar-panels2x.jpg';
import manySolarPanels3x from '../../assets/images/many-solar-panels/many-solar-panels3x.jpg';
import biotechPlant1x from '../../assets/images/biotech-plant/biotech-plant1x.jpg';
import biotechPlant2x from '../../assets/images/biotech-plant/biotech-plant2x.jpg';
import biotechPlant3x from '../../assets/images/biotech-plant/biotech-plant3x.jpg';
import healthyFarm1x from '../../assets/images/healthy-farm/healthy-farm1x.jpg';
import healthyFarm2x from '../../assets/images/healthy-farm/healthy-farm2x.jpg';
import healthyFarm3x from '../../assets/images/healthy-farm/healthy-farm3x.jpg';
import miniNuclearStations1x from '../../assets/images/mini-nuclear-stations/mini-nuclear-stations1x.jpg';
import miniNuclearStations2x from '../../assets/images/mini-nuclear-stations/mini-nuclear-stations2x.jpg';
import miniNuclearStations3x from '../../assets/images/mini-nuclear-stations/mini-nuclear-stations3x.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
	Button,
	SliderWrapper,
	CounterText,
	CounterTextSpan,
	NavigationButton,
	NavigationSlider,
	Svg,
	WrapperTitle,
} from './SectionCases.styled';
import svgSprite from '../../assets/images/svgSprite.svg';
import { Card } from '../Card';

class SectionCases extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			slidesToShow: window.innerWidth > 767 ? 2 : 1,
		};
		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
		this.updateSlidesToShow = this.updateSlidesToShow.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateSlidesToShow);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateSlidesToShow);
	}

	updateSlidesToShow() {
		const screenWidth = window.innerWidth;
		const slidesToShow = screenWidth > 767 ? 2 : 1;
		if (slidesToShow !== this.state.slidesToShow) {
			this.setState({ slidesToShow });
		}
	}

	nextSlide() {
		this.slider.slickNext();
	}

	prevSlide() {
		this.slider.slickPrev();
	}

	caruselList = [
		{
			x1: windTurbinesGrassCovered1x,
			x2: windTurbinesGrassCovered2x,
			x3: windTurbinesGrassCovered3x,
			alt: 'Beautiful view wind turbines grass covered field captured holland',
			location: `Lviv Region, Radekhiv town
Private Enterprise “ZAKHIDNYI BUH”`,
			name: 'Wind Power for auto field irrigation',
			date: 'July 2023',
		},
		{
			x1: manySolarPanels1x,
			x2: manySolarPanels2x,
			x3: manySolarPanels3x,
			alt: 'A large solar farm',
			location: `Zhytomyr city
Private Enterprise “Bosch”`,
			name: 'Solar Panels for industrial use',
			date: 'November 2023',
		},
		{
			x1: biotechPlant1x,
			x2: biotechPlant2x,
			x3: biotechPlant3x,
			alt: 'Thermal modules',
			location: `Rivne city
Private Enterprise “Biotech”`,
			name: 'Thermal modules',
			date: 'October 2023',
		},
		{
			x1: healthyFarm1x,
			x2: healthyFarm2x,
			x3: healthyFarm3x,
			alt: 'Wind power',
			location: `Kherson city
Private Enterprise “HealthyFarm”`,
			name: 'Wind power',
			date: 'September 2021',
		},
		{
			x1: miniNuclearStations1x,
			x2: miniNuclearStations2x,
			x3: miniNuclearStations3x,
			alt: 'Mini nuclear stations',
			location: `Zaporizhia city
Private Enterprise “Biotech”`,
			name: 'Mini nuclear stations',
			date: 'May 2021 ',
		},
	];

	counterNumber() {
		const maxSlides = this.caruselList.length;
		const { currentSlide, slidesToShow } = this.state;
		const current = currentSlide + slidesToShow;
		const displayNumber = current <= maxSlides ? current : 1;
		const counter = String(displayNumber).padStart(2, '0');
		return counter;
	}

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: this.state.slidesToShow,
			slidesToScroll: 1,
			afterChange: (current) => this.setState({ currentSlide: current }),
		};

		return (
			<Section>
				<WrapperTitle>
					<Title>Successful cases of our company</Title>
					<NavigationSlider>
						<CounterText>
							{`${this.counterNumber()} `}
							<CounterTextSpan>{`/${String(this.caruselList.length).padStart(
								2,
								'0'
							)}`}</CounterTextSpan>{' '}
						</CounterText>
						<NavigationButton>
							<Button onClick={this.prevSlide}>
								<Svg width={36} height={36}>
									<use xlinkHref={svgSprite + '#icon-arrow-l'} />
								</Svg>
							</Button>
							<Button onClick={this.nextSlide}>
								<Svg width={36} height={36}>
									<use xlinkHref={svgSprite + '#icon-arrow-r'} />
								</Svg>
							</Button>
						</NavigationButton>
					</NavigationSlider>
				</WrapperTitle>
				<SliderWrapper>
					<Slider ref={(slider) => (this.slider = slider)} {...settings}>
						{this.caruselList.map((item, index) => (
							<Card key={index} item={item} />
						))}
					</Slider>
				</SliderWrapper>
			</Section>
		);
	}
}

export default SectionCases;
