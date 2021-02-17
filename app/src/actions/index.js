import axios from 'axios';

export const FETCH_IMAGE_LOADING = 'FETCH_IMAGE_LOADING';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAIL = 'FETCH_IMAGE_FAIL';

export const getKitty = () => dispatch => {

    dispatch(fetchImageLoading());

    axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then((res) => {
        dispatch(fetchImageSuccess(res.data[0].url));
    })
    .catch((err) => {
        console.log(err);
    })
};

export const fetchImageLoading = () => {
    return ({ type: FETCH_IMAGE_LOADING });
};

export const fetchImageSuccess = (image) => {
    return ({ type: FETCH_IMAGE_SUCCESS, payload: image });
};

export const fetchImageFail = () => {
    return ({ type: FETCH_IMAGE_FAIL });
};