"use client";
import IntroHeader from './components/IntroHeader/index.jsx'
import { Container, Row, Col }  from "react-bootstrap"
import './globals.css'
import IntroLeft from './components/IntroLeft/index.jsx'
import IntroRight from './components/IntroRight/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Container fluid>
      <IntroHeader />
      <Row style={{margin: "30px 50px 30px 30px"}}>
        <Col lg={6} className="p-0">
         <IntroLeft /> 
        </Col>
        <Col lg={6} className="p-0">
        <IntroRight />
        </Col>
      </Row> 
    </Container>
  )
}

export default App
