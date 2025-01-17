import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            };
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                smurfs: null,
                error: action.payload
            };
        default:
            return state;
    }
};
