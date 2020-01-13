import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var percentage = 66;
var test = 'hello';

class Keyword extends React.Component{
  render(){
    return(
      <CircularProgressbar value={percentage} text={`${test}`} />
    );
  }
}

function App() {
  const percentage = 66;
  return (
    <div className="App">
      <header class="App-header"><p>title</p></header>
      <Container>
        <Row>
          <Col md={4}><p>hello world!</p></Col>
          <Col md={8}>
            <Row>
              <Col>
                <Keyword />
              </Col>
              <Col>
                <Keyword />
              </Col>
            </Row>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
