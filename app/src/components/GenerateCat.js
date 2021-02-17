import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getKitty } from './../actions/index';

function GenerateCat (props) {

    // console.log(props.isFetching);

    const handleClick = () => {
        props.getKitty();
    };

    // useEffect(() => {
    //     props.getKitty();
    // }, []);

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
            <div>hello from generate cats!</div>
            <button onClick={handleClick}>Give Me A Kitty!</button>
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
    border: solid 1px blue;
`;
