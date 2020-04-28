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
  constructor() {
    super();
    this.state = {
      datas: [
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        },
        {
          setup: "Data",
          punchline: "Answer"
        }
      ]
    }
  }

  render() {
    let dataCards = this.state.datas.map(info => {
      return (
        <Col className="p-3" sm="4">
          <Data info={info} />
        </Col>
      )
    })
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Data Cards</h1>
          <p className="lead">Data presented on each card-ui elements</p>
          <hr className="my-2" />
          {/* <p>Prepare to be amused!</p> */}
          <p className="lead">
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
            {dataCards}
          </Row>
        </Container>
      </div>
    );
  }
};