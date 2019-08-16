import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Smurf from './Smurf';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SmurfList = props => {
    console.log(props)
    return (
        <div className="container">
            <div className="navbar">
                <Button onClick={props.getData}>
                    {props.isLoading ? (
                        <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
                    ) : (
                            'Find New Smurf'
                        )}
                </Button>
            </div>
            <div className="cards">
                {props.smurfs &&
                    props.smurfs.map(smurf => <Smurf setNewSmurf={props.setNewSmurf} key={smurf.name} smurf={smurf} />)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    };
};
export default connect(
    mapStateToProps,
    { getData }
)(SmurfList);

