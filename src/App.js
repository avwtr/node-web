import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from './logo.png'; // Make sure to place your logo image in the src folder

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Acumin';
    src: url('/Acumin-BdPro.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'JetBrains Mono', monospace;
    background-color: #050B38;
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px; /* Set a fixed height for the header */
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 20px; /* Add margin to create white space below the header */
`;

const Header = styled.header`
  width: 60%;
  height: 100%; /* Ensure the header occupies the full height of the wrapper */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #050B38;
`;

const Logo = styled.img`
  height: 40px;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const WhiteSpace = styled.div`
  width: 100%;
  height: 60px; /* Adjust the height as needed */
  background-color: white;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderWrapper>
          <Header>
            <Logo src={logo} alt="Node Logo" />
          </Header>
        </HeaderWrapper>
        <WhiteSpace />
        <Main>
          {/* Main interface content goes here */}
        </Main>
      </Container>
    </>
  );
};

export default App;
