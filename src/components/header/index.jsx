import { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Container, Background, Logo, ButtonLink } from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReachRouterLink to={to}>
			<Logo {...restProps} />
		</ReachRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
