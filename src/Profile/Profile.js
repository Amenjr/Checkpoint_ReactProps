import React from 'react';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import PropTypes from 'prop-types';
function Prof(props) {
 
    return (
<Card style={{ width: '18rem' }} className="Profile">
  <Card.Img variant="top"/>
  {props.children}
  <Card.Body id="card">
    <Card.Title><span className="titre">FullName:</span> {props.fullname}</Card.Title>
    <Card.Text>
    <span className="titre">bio:</span> {props.bio}
    <br/><span className="titre">profession:</span> {props.profession}
    </Card.Text>
    <Button variant="primary" onClick={()=>props.handleClick(props.fullname)} id="btn">Go somewhere{props.button}</Button>
  </Card.Body>
</Card>
    );
}

export default Prof;
// default props//
Prof.defaultProps = {
    fullname :'NOT FOUND',
    profession:'mettre profession !',
    bio: 'not found',
    children:'photo de profile',
};
//PropTypes//
Prof.propTypes={
    fullname :PropTypes.string,
    profession :PropTypes.string,
    bio :PropTypes.string,
}


