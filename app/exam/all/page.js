'use client'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import questionService from '@/app/services/questions';

function ExamAll() {

    const qLenght = questionService.getQuestionsLength();
    const qList = questionService.getQuestions();

    const [questionId, setQuestionId] = useState(0);
    const [question, setQuestion] = useState(qList[questionId]);

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const [showAlertCorrectAnswer, setShowAlertCorrectAnswer] = useState(false);
    const [showAlertWrongAnswer, setShowAlertWrongAnswer] = useState(false);

    const handleSelectedAnswer = (e) => {
        let tempSelectedAnswers = selectedAnswers;
        console.log("e.target.id" + e.target.id)
        console.log("tempSelectedAnswers" + tempSelectedAnswers)
        if (e.target.checked) {
            tempSelectedAnswers.push(e.target.id);
        } else {
            tempSelectedAnswers = tempSelectedAnswers.filter((answer) => answer !== e.target.id);
        }
        console.log("tempSelectedAnswers" +tempSelectedAnswers)
        setSelectedAnswers(tempSelectedAnswers);
        console.log("selectedAnswers" +selectedAnswers);

    }
    
    const handleCheckAnswer = () => {
        let correct = true;
        question.correctAnswers.forEach((answer) => {
            if (!selectedAnswers.includes(answer)) {
                correct = false;
            }
        });
        if (correct) {
            setCorrectAnswers(correctAnswers + 1);
            setShowAlertCorrectAnswer(true);
        }

        console.log(correctAnswers)
    }

    const handleNextQuestion = () => {
        if (questionId < qLenght - 1) {
            console.log("questionId before " + questionId)
            setQuestionId(questionId + 1);
            console.log("questionId after " + questionId)
            setQuestion(qList[questionId]);
            console.log("Q: ", qList[questionId]);
            setSelectedAnswers([]);
            console.log("selectedAnswers" +selectedAnswers);

        }
    }
    
    useEffect(() => {
        setQuestion(qList[questionId]);
    }
    , [questionId]);

    return (
        <>
            <Alert key="success" variant="success" show={showAlertCorrectAnswer} onClose={() => setShowAlertCorrectAnswer(false)} dismissible>DOBRA ODPOWIEDŹ!</Alert>
            <Row>
                <Col><strong>Pytanie:</strong> { questionId + 1 } / { qLenght }</Col>
                <Col></Col>
                <Col><strong>Prawidłowe odpowiedzi: <span className='h4'><Badge pill bg="success">{correctAnswers}</Badge></span></strong></Col>

            </Row>
            <Card className='mt-4'>
                <Card.Body>
                    <Card.Title>
                        {question.question}
                    </Card.Title>
                    <Form className="mt-4">
                        {
                            Object.keys(question.answers).map((key) => {
                                return (
                                    <Form.Check
                                        type="checkbox"
                                        key={key}
                                        label={question.answers[key]}
                                        name="answers"
                                        id={key}
                                        className="mt-3"
                                        onChange={handleSelectedAnswer}
                                    />
                                )
                            })
                        }

                    </Form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button variant="outline-secondary" size="sm">Wróc</Button>
                    <Button variant="warning" size="sm" onClick={handleCheckAnswer}>Sprawdź odpowiedź</Button>
                    <Button variant="outline-primary" onClick={handleNextQuestion} size="sm">Następne pytanie</Button>
                </Card.Footer>
            </Card>
        </>
    )

}

export default ExamAll;