'use client'

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';

function TestCard({title, subtitle, linkTo}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    {title}
                </Card.Title>
                <Card.Subtitle className="mt-2 mb-2 text-muted text-sm">
                    <small>{subtitle}</small>
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-end">
                <Button variant="outline-primary" size="sm" href={linkTo}>Start</Button>
            </Card.Footer>
        </Card>
    )
}
export default TestCard;