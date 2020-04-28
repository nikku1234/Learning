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
          setup: "What time did the man go to the dentist?",
          punchline: "Tooth hurt-y"
        },
        {
          setup: "Did you hear about the guy who invented Lifesavers?",
          punchline: "They say he made a mint"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why did the Clydesdale give the pony a glass of water?",
          punchline: "Because he was a little horse!"
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
          <p>Prepare to be amused!</p>
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