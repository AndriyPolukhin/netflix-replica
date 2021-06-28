import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';
export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.35),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.35)
		),
		url(${({ src }) =>
				src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`})
			top left / cover no-repeat;
	@media (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && `background: none;`}
	}
`;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const Link = styled.p`
	color: #fff;
	text-decoration: none;
	margin-right: 30px;
	font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
	cursor: pointer;

	&:hover {
		font-weight: bold;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const SearchInput = styled.input``;

export const Search = styled.div``;

export const SearchIcon = styled.button``;
export const ButtonLink = styled(ReachRouterLink)`
	display: block;
	background-color: #e50014;
	width: 84px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background: #f40612;
	}
`;

export const Picture = styled.button``;

export const Dropdown = styled.div``;
export const Profile = styled.div``;

export const Feature = styled(Container)``;

export const FeatureCallOut = styled.h2``;

export const Text = styled.p``;
export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const PlayButton = styled.button``;
