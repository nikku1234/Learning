import React from 'react';
import Data from './Data';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Joke Cards</h1>
          <p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
          <hr className="my-2" />
          <p>Prepare to be amused!</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col className="p-3" sm="4">
              <Data />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};