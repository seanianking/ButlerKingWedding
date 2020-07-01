import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Announcement() {
    return (
        <div>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col lg={{span: 10, offset: 1}} className='border'>
                        <p className='mt-3 announceText'>Jared and Jamie King are pleased to announce the marriage of their daughter</p>
                        <p className='announceNames'>Hayleigh Nicole</p>
                        <p className='announceText'>to</p>
                        <p className='announceNames'>Caden Andrew</p>
                        <p className='announceText'>son of Doug and Michelle Butler August 6, 2020 in the Manti Utah Temple</p>
                        <br/>
                        <p className='announceText'>Come celebrate with us at a reception held in their honor August 7, 2020 6:00pm to 8:30pm</p>
                        <p className='announceText'>11529 N Broadleaf Hollow Lane <br/> Highland, Utah 84003</p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Announcement
