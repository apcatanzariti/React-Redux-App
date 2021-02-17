import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getKitty } from './../actions/index';

function GenerateCat (props) {

    // console.log(props.isFetching);

    const handleClick = () => {
        props.getKitty();
    };

    useEffect(() => {
        props.getKitty();
    }, []);

    if (props.error) {
        return (
            <div>There's an error here: {props.error}</div>
        );
    };

    if (props.isFetching) {
        return (
            <div>Fetching a kitty for you!...</div>
        );
    };

    return (
        <StyledContainerDiv>
            <div><img src={props.imageUrl} alt='a very cool cat' /></div>
            <StyledKittyButton onClick={handleClick}>Give Me A Kitty!</StyledKittyButton>
        </StyledContainerDiv>
    );
};

const mapStateToProps = state => {
    return {
        imageUrl: state.imageUrl,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getKitty })(GenerateCat);

const StyledContainerDiv = styled.div`
    // border: solid 1px blue;

    img {
        width: 80%;
        margin-top: 3%;
    }
`;

const StyledKittyButton = styled.button`
    margin-top: 2%;
    font-size: 1em;
    padding: 1% 3% 1% 3%;
    transition: .3s;
    border: none;
    background-color: white;
    border: solid 2px #a50000;
    color: #a50000;
    cursor: pointer;

    :hover {
        background-color: #a50000;
        color: white;
    }
`;
