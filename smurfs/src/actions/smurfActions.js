import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => { console.log(res.data); return res })
        .then(res => {
            // res.data.data
            dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response.statusText });
        });
};
