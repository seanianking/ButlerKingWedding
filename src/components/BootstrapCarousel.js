import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HC1 from '../assets/images/HC1.JPG'
import HC2 from '../assets/images/HC2.JPG'
import HC3 from '../assets/images/HC3.JPG'
import Col from 'react-bootstrap/Col'



function BootstrapCarousel() {

    return (
    
            < div >
                <Col md={{ span: 12 }}>
                    < Carousel >
                        < Carousel.Item>
                            < img fluid style={{ maxHeight: "650px" }}
                                className="d-block w-100"
                                src={HC1} alt="" />
                        </Carousel.Item >
                        < Carousel.Item>
                            < img fluid style={{ maxHeight: "650px" }}
                                className="d-block w-100"
                                src={HC2} alt="" />
                        </Carousel.Item >
                        < Carousel.Item>
                            < img fluid style={{ maxHeight: "650px" }}
                                className="d-block w-100"
                                src={HC3} alt="" />
                        </Carousel.Item >
                    </Carousel >
                </Col>
            </div >
    
    )
}


export default BootstrapCarousel 