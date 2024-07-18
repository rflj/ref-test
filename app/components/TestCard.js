'use client'

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

function TestCard({title, subtitle, linkTo}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Subtitle className="mt-2 mb-2 text-muted text-sm">
                    <small>{subtitle}</small>
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-end">
                <Button variant="outline-primary" size="sm" href={linkTo} disabled>Start</Button>
            </Card.Footer>
        </Card>
    )
}
export default TestCard;