import React from 'react'
import './Main.css'
import {Container,Row,Col} from 'react-bootstrap'


function Main() {
  return (
    <>
    <Container id='main' className='font-bold text-uppercase border border-dark border-top-0 text-center'>
        <Row className='flex'>
            <Col className='d-flex align-items-center px-5 border-dark col-12 col-lg-6'>this is some content aligned in the center verticaly and horizontally</Col>
            <Col className='col-12 col-lg-6'></Col>
        </Row>
    </Container>
    </>
  )
}

export default Main
