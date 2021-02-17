import styled from 'styled-components';
import GenerateCat from './components/GenerateCat';

function App() {
  return (
    <StyledContainerDiv>
      <GenerateCat />
    </StyledContainerDiv>
  );
;}

export default App;

const StyledContainerDiv = styled.div`
  margin: 0 auto;
  border: solid 1px red;
  text-align: center;
`;
