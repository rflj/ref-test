'use client'
import { Row, Col, Container } from "react-bootstrap";
import TestCard from "./components/TestCard";
import questionService from "./services/questions";
import Page from "./questions/all/page"


export default function Home() {
  return (
    <>
      <Page />
      {/* <Container>
        <Row>
          <Col>
            <TestCard 
              key="1"
              title={"Katalog pytań"} 
              subtitle={<div><strong>Liczba pytań: </strong> {questionService.getQuestionsLength()}</div>}
              linkTo="all"
            />
          </Col>
          <Col>
          2
          </Col>
          <Col>
          3
          </Col>
        </Row>
      </Container>
      <Container>
      </Container> */}
    </>
  );
}
