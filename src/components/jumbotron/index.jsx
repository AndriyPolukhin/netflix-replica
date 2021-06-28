import {
	Container,
	Inner,
	Pane,
	Title,
	SubTitle,
	Image,
	Item
} from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
	return (
		<Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronContainer({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronContainer({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronContainer({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronContainer({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Jumbotron;
