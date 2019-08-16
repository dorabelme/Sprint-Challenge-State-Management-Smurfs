import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './card.scss';

const Smurf = props => {
    console.log(props)
    return (
        <Card>
            <Card.Content>
                <Card.Header className="header" onClick={() => props.setNewSmurf(props.smurf)}>{props.smurf.name}</Card.Header>
                <Card.Description className="header">Age: {props.smurf.age}</Card.Description>
                <Card.Description className="header">Height: {props.smurf.height}</Card.Description>

            </Card.Content>
            <Card.Content extra>
                <div><Icon name='like' />
                    Like</div>
            </Card.Content>
        </Card>
    );
};

export default Smurf;
