import { createRoot } from 'react-dom/client';
import './index.module.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);
