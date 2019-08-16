import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './form.scss';

import { postData, editData, deleteData } from '../actions';


const SmurfForm = props => {

    const handleChanges = e => {
        props.setNewSmurf({ ...props.newSmurf, [e.target.name]: e.target.value });
    };

    return (
        <Form>
            <Form.Field>
                <label>Name</label>
                <input
                    className="title-input"
                    type="text"
                    name="name"
                    value={props.newSmurf.name}
                    onChange={handleChanges}
                />
            </Form.Field>
            <Form.Field>
                <label>Age</label>
                <input
                    className="title-input"
                    type="text"
                    name="age"
                    value={props.newSmurf.age}
                    onChange={handleChanges}
                />
            </Form.Field>
            <Form.Field>
                <label>Height</label>
                <input
                    className="title-input"
                    type="text"
                    name="height"
                    value={props.newSmurf.height}
                    onChange={handleChanges}
                />
            </Form.Field>
            <div className="buttons">
                <Button
                    onClick={() => {
                        props.postData(props.newSmurf);
                        props.setNewSmurf('');
                    }}
                >
                    Add New Smurf
          </Button>
                <Button
                    onClick={() => {
                        props.editData(props.newSmurf);
                    }}
                >
                    Edit Smurf
          </Button>
                <Button
                    onClick={() => {
                        props.deleteData(props.newSmurf.id);
                        // props.setNewSmurf({ name: '', age: '', height: '', id: -1 });
                    }}
                >
                    Delete Smurf
          </Button>
                {props.error !== "" && <p>{props.state.error}</p>}
            </div>
        </Form>
    );
};

const mapStateToProps = state => {
    console.log('state', state);
    return {
        state
    };
};

export default connect(
    mapStateToProps,
    { postData, editData, deleteData }
)(SmurfForm);
