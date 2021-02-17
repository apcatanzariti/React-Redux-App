import styled from 'styled-components';

export default function Header () {
    return (
        <StyledHeaderContainer>
            <h1>Kitty Generator</h1>
        </StyledHeaderContainer>
    );
};

const StyledHeaderContainer = styled.div`
    // border: solid 1px green;
    font-family: sans-serif;
    color: #a50000;
    padding: 1% 0% 1% 0%;
    box-shadow: 0px 7px 7px #c2c2c2;
`;