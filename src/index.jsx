import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';

render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
