'use client'
import { Row, Col, Container } from "react-bootstrap";
import TestCard from "./components/TestCard";
import questionService from "./services/questions";


export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <TestCard 
              title={"Katalog pytań"} 
              subtitle={<div><strong>Liczba pytań: </strong> {questionService.getQuestionsLength()}</div>}
              linkTo="/exam/all"
            />
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
