import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export const JumbotronContainer = () => {
	return (
		<Jumbotron.Container>
			{jumboData.map((item) => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.SubTitle>{item.subtile}</Jumbotron.SubTitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
};
