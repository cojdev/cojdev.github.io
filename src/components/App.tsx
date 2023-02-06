import React from 'react';

// components
import Sidebar from './Sidebar';
import Main from './Main';
import { GlobalStyles, StyledWrapper } from './App.styles';

const App = () => (
  <StyledWrapper>
    <GlobalStyles />
    <Sidebar />
    <Main />
  </StyledWrapper>
);

export default App;
