import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
