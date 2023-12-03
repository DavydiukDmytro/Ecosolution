import { Container } from '../Container';
import { Header } from '../Header';
import { Section } from '../Section';
import { SectionMain } from '../SectionMain';
import { Title } from '../SectionMain/SectionMain.styled';

export const App = () => {
	return (
		<>
			<Container>
				<Header />
				<main>
					<SectionMain />
					<Section>
						<Title>Main values of our company</Title>
					</Section>
				</main>
			</Container>
		</>
	);
};
