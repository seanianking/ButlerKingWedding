import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
// import Daisy from '../assets/images/daisy.jpg'

function Header() {
    return (
        <div className="pt-4 pb-3">
            <Container fluid>
                <Row>
                    {/* <Col>
                    <Image fluid src={{ Daisy }}></Image>
                    </Col> */}
                    <Col>
                        <h1 className="headText">Caden and Hayleigh</h1>
                    </Col>
                    {/* <Col>
                    <Image fluid src={{ Daisy }}></Image>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Header
