"use client";
import './globals.css'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col }  from "react-bootstrap"

import IntroHeader from './components/IntroHeader/index.jsx'
import IntroLeft from './components/IntroLeft/index.jsx'
import IntroRight from './components/IntroRight/index.jsx'

function App() {

  return (
    <Container fluid>
      <IntroHeader />
      <Row className="content-container">
        <Col lg={6} className="p-0 order-2 order-lg-1">
         <IntroLeft /> 
        </Col>
        <Col lg={6} className="p-0 order-1 order-lg-2">
        <IntroRight />
        </Col>
      </Row> 
    </Container>
  )
}

export default App
