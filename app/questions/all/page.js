'use client'
import questionService from "@/app/services/questions"
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOpts,
    TableBody,
    TableHeader
} from 'react-bs-datatable';
import { Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Page() {

    const questionList = questionService.getQuestions();
    // Create table headers consisting of 4 columns.
    const headers = [
        { title: 'Pytanie', prop: 'question', isFilterable: true },
        { title: 'Odpowiedzi', prop: 'answers', isFilterable: true },
        { title: 'Prawidłowe odpowiedzi', prop: 'correctAnswers' }
    ];

    // Randomize data of the table columns.
    // Note that the fields are all using the `prop` field of the headers.
    const body = questionList.map((question, index) => {
        let qa = Object.entries(question.answers)
        return {
            question: question.question,
            answers: qa.map(([key, value]) => <li>{key}. {value} </li>),
            correctAnswers: question.correctAnswers.join(', ').toUpperCase()
        }
    })

    return (
        <>
            <h1> Wszystkie pytania</h1>
            <DatatableWrapper body={body} headers={headers}>
                <Row className="mb-4">
                    <Col
                        xs={12}
                        lg={4}
                        className="d-flex flex-col justify-content-end align-items-end"
                    >
                        <Filter />
                    </Col>
                </Row>
                <Table>
                    <TableHeader />
                    <TableBody />
                </Table>
            </DatatableWrapper>
        </>
    )
}
