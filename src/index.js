import React from 'react';
import ReactDOM from 'react-dom';
import DefaultPage from './components/DefaultPage';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
    <ThemeProvider theme={{ fontFamily: 'Lato' }}>
      <>
        <DefaultPage />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
