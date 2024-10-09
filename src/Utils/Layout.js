import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import logo from '../logo.png'; // Adjust the path to the logo
import profileImage from '../Assets/profile.JPG'; // Adjust the path to the profile image

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Acumin';
    src: url('/Acumin-BdPro.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    width: 100vw;
    height: 100vh;
    font-family: 'JetBrains Mono', monospace;
    background-color: #050B38;
    color: white;
  }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 20px;
  position: relative;
`;

const Header = styled.header`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #050B38;
`;

const Logo = styled.img`
  height: 60px;
`;

const HeaderText = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: white;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 100%;
  animation: ${typing} 4s steps(40, end) forwards, ${blink} 0.75s step-end infinite;
  animation-fill-mode: forwards;
`;

const Profile = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Username = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: white;
  margin-top: 5px;
`;

const WhiteSpace = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60vw;
`;

const GlobeViewText = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #050B38;
  margin-right: 10px;
`;

const ToggleButton = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: ${({ active }) => (active ? 'white' : '#050B38')};
  background-color: ${({ active }) => (active ? '#050B38' : 'white')};
  border: 1px solid #050B38;
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Layout = ({ children }) => {
  const [globeView, setGlobeView] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderWrapper>
          <Header>
            <Logo src={logo} alt="Node Logo" />
            <HeaderText>
              SECURE. GROUND-LEVEL IMAGERY. ANYWHERE IN THE WORLD. ON DEMAND
            </HeaderText>
          </Header>
        </HeaderWrapper>
        <WhiteSpace>
          <GlobeViewText>GLOBE VIEW:</GlobeViewText>
          <ToggleButton active={globeView} onClick={() => setGlobeView(true)}>ON</ToggleButton>
          <ToggleButton active={!globeView} onClick={() => setGlobeView(false)}>OFF</ToggleButton>
        </WhiteSpace>
        <Main>
          {children}
        </Main>
      </Container>
    </>
  );
};

export default Layout;