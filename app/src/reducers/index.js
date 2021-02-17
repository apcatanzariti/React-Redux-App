import { FETCH_IMAGE_LOADING, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL } from './../actions/index';

const initialState = {
    imageUrl: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case FETCH_IMAGE_LOADING:
            return ({
                ...state,
                isFetching: true
            });

        case FETCH_IMAGE_SUCCESS:
            return ({
                ...state,
                imageUrl: action.payload,
                isFetching: false
            });

        case FETCH_IMAGE_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            });

        default:
            return state;
    }
};