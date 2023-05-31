import React from "react";
import { Container, Row, Col } from "react-grid-system";

export default function Referer() {
  return (
    <>
    <div style={{"background-color":"white","display":"flex", "flex-direction": "column","margin-top":"40px","border-radius":"5px"}}>
    <div style={{"padding":"20px"}}>

      <div style={{"padding":"10px"}}>Referrer</div>
      <Container style={{"width":"100%","height":"100%","border-radius":"10px"}}>
        <Row style={{"background-color":"#DDE6ED","display":"flex","flex-direction":"row","justify-content":"space-between","padding":"10px"}}>
          <Col>Location</Col>
          <Col>Views</Col>
          <Col>Sales</Col>
          <Col>Conversion</Col>
          <Col>Total</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col>google.com</Col>
          <Col>3746</Col>
          <Col>752</Col>
          <Col>43%</Col>
          <Col>$19,291</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col>facebook.com</Col>
          <Col>8126</Col>
          <Col>728</Col>
          <Col>32%</Col>
          <Col>$17,638</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col>twitter.com</Col>
          <Col>8836</Col>
          <Col>694</Col>
          <Col>28%</Col>
          <Col>$16,218</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col>Direct,email,IM</Col>
          <Col>1173</Col>
          <Col>645</Col>
          <Col>24%</Col>
          <Col>$14,421</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col>Linkedin.com</Col>
          <Col>2739</Col>
          <Col>539</Col>
          <Col>20%</Col>
          <Col>$12,370</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col>instagram.com</Col>
          <Col>2739</Col>
          <Col>539</Col>
          <Col>20%</Col>
          <Col>$12,370</Col>
        </Row>
        <Row style={{"padding":"20px"}}>
          <Col style={{"color":"skyblue"}}>Show more</Col>
        </Row>
      </Container>
    </div>
    </div>
    </>
  );
}
