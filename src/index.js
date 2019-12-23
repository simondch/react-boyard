import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/rootReducer';

import axios from 'axios';

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

import DefaultPage from 'components/DefaultPage';
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
      <ThemeProvider theme={{ fontFamily: 'Lato' }}>
        <DefaultPage />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
