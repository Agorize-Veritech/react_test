import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Keyword extends React.Component{
  render(){
    //const pairs = {'word1':66,'word2':77,'word3':15,};
    const percentages = [66,77,15]
    const matches = ['word1','word2','word3']
    const results = percentages.map((percentages, index) => {
      const match = matches[index];
      return (
        <Col md={10-index}><CircularProgressbar value={percentages} text={match}/></Col>
      )
    });
    return(
      <div>{results}</div>
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
            <Container fluid={true}>
                <Keyword/>
            </Container>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
