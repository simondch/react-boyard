import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/rootReducer';

import axios from 'axios';

import './languages/i18n';

import HomePage from 'components/HomePage';

const api = axios.create({
  baseURL: 'https://thesimpsonsquoteapi.glitch.me/quotes'
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const GlobalStyle = createGlobalStyle`
	html, body, #root, #root>div {
	height: 100%;
	width:100%;
	margin: 0 ;
	font-family: ${props => props.theme.fontFamily};
}
`;

const App = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={{ fontFamily: "'Oxygen', 'Lato', sans-serif" }}>
          <HomePage />
          <GlobalStyle />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
