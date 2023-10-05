import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Navbar = () => {
  return (
    <>
    <nav>
    <Container className='text-uppercase font-bold border border-dark'>
        <Row>
            <Col className='border-end border-dark text-center p-4 col-4'><div className="">lorem ipsum</div></Col>
            <Col ><div className="text-end pe-5 p-4 col-8">link 1</div></Col>
        </Row>
    </Container>
    </nav>
    </>
  )
}

export default Navbar
