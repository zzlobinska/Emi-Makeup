import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18next from 'i18next';

import './init';
import './i18n/i18n';

import AppRouter from './app/AppRouter';
import MuiTheme from './MuiTheme';
import store from './store';

import 'react-notifications-component/dist/theme.css';
import 'normalize.css';
import 'src/styles/reset.scss';
import 'src/styles/variables.css';
import 'src/styles/global.scss';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <HelmetProvider>
          <MuiTheme>
            <AppRouter />
          </MuiTheme>
        </HelmetProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
