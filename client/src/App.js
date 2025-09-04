import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Contact from './components/Contact';

const AppContainer = styled.div`
  font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Droid Sans Mono', 'Source Code Pro', monospace;
  overflow-x: hidden;
  background: #000000;
  color: #c9d1d9;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Hero />
      <Contact />
    </AppContainer>
  );
}

export default App;
