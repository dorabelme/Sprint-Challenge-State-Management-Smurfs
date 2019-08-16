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


export const postData = (data) => dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
        .post("http://localhost:3333/smurfs", data)
        .then(res => { console.log(res.data); return res })
        .then(res => {
            // res.data.data
            dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
        });
};


export const editData = (data) => {
    var clone = Object.assign({}, data);
    delete clone.id;

    return dispatch => {
        dispatch({ type: FETCH_SMURF_DATA_START });
        axios
            .put(`http://localhost:3333/smurfs/${data.id}`, clone)
            .then(res => { console.log(res.data); return res })
            .then(res => {
                // res.data.data
                dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
            });
    };
};


export const deleteData = (id) => dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => { console.log(res.data); return res })
        .then(res => {
            // res.data.data
            dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
        });
};