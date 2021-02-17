import styled from 'styled-components';
import GenerateCat from './components/GenerateCat';
import Header from './components/Header';

function App() {
  return (
    <StyledContainerDiv>
      <Header />
      <GenerateCat />
    </StyledContainerDiv>
  );
;}

export default App;

const StyledContainerDiv = styled.div`
  // border: solid 1px red;
  margin: 0 auto;
  text-align: center;
`;
