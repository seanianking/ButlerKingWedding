import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
        <div className="pt-3 pb-3">
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="headText">Caden and Hayleigh</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
