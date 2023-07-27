import {Container, Row, Col, Stack, Card, Button } from 'react-bootstrap';

function ContainerExample() {
return (
<>


    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./Imgs/finance3.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./Imgs/finance3.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

    <Stack direction="horizontal" gap={3} className="m-4">
        <div className="p-2 bg-warning">First item</div>
        <div className="p-2 ms-auto bg-success">Second item</div>
        <div className="vr" />
        <div className="p-2 bg-info">Third item</div>
    </Stack>

    <Stack className="bg-danger" direction="horizontal" gap={3}>
        <div className="p-2 bg-info">First item</div>
        <div className="p-2 bg-primary">Second item</div>
        <div className="p-2 bg-success">Third item</div>
    </Stack>
    <Container  >
        <Row className='justify-content-center '>
            <Col className='bg-warning d-flex justify-content-center p-3'>
            <Card style={{ width: '18rem' }} className="text-center ">
                <Card.Img variant="top" src="./Imgs/finance3.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className='bg-warning d-flex justify-content-center p-3'>
            <Card style={{ width: '18rem' }} className="text-center ">
                <Card.Img variant="top" src="./Imgs/finance3.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className='bg-warning d-flex justify-content-center p-3'>
            <Card style={{ width: '18rem' }} className="text-center ">
                <Card.Img variant="top" src="./Imgs/finance3.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col className='bg-success'>2 of 2</Col>
        </Row>
        <Row>
            <Col className='bg-danger'>1 of 3</Col>
            <Col className='bg-primary'>2 of 3</Col>
            <Col className='bg-info'>3 of 3</Col>
        </Row>
        <Row>
            <Col className='bg-info'>1 of 3</Col>
            <Col xs={1} className='bg-danger'>2 of 3 (wider)</Col>
            <Col className='bg-warning'>3 of 3</Col>
        </Row>
        <Row>
            <Col className='bg-primary'>1 of 3</Col>
            <Col xs={5} className='bg-secondary'>2 of 3 (wider)</Col>
            <Col className='bg-dark'>3 of 3</Col>
        </Row>
    </Container>
    <Container fluid>

        <Row className="justify-content-md-center">
            <Col xs lg="2" className='bg-info'>lg 2</Col>
            <Col md="auto" className='bg-primary'>Variable width content</Col>
            <Col xs lg="4" className='bg-success'> raju </Col>
        </Row>



        <Row className="justify-content-lg-end justify-content-md-center">
            <Col xs md="2" className='bg-danger'>md 2 </Col>
            <Col md="auto" className='bg-warning'>Vari width content width content</Col>
            <Col xs md="2" className='bg-secondary'> 3 of 3 </Col>
        </Row>

        <Row className="justify-content-md-start">
            <Col xs lg="2" className='bg-info'>1 of 3</Col>
            <Col lg="auto" className='bg-primary'>Variable width content</Col>
            <Col xs lg="4" className='bg-success'> raju </Col>
        </Row>

    </Container>


    <Container>
        <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
        </Row>
    </Container>

    <Container>
        <Row>
            <Col md>First, but unordered</Col>
            <Col md={{ order: 12 }}>Second, but last</Col>
            <Col md={{ order: -1 }} className="bg-info">Third, but second</Col>
        </Row>
    </Container>


    <Container className='my-5 bg-success p-3'>
        <Row>
            <Col lg={{ order: 'last' }}>First, order -last avi</Col>
            <Col lg>Second, unordered</Col>
            <Col lg>Second, unordered</Col>
            <Col lg={{ order: 'first' }}>Third, but first avi</Col>
        </Row>
    </Container>


    <Container>
        <Row>
            <Col md={4} className="bg-info">md=4</Col>
            <Col md={{ span: 3, offset: 5 }} className="bg-danger">{`md={{ span: 3, offset: 5 }}`}</Col>
        </Row>
        <Row className='justify-content-md-center'>
            <Col md={{ span: 3 }} className="bg-success">{`md={{ span: center 3, offset: 3 }}`}</Col>
            <Col md={{ span: 4, offset: 2 }} className="bg-success">{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }} className="bg-secondary">{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row>
    </Container>

    <Container>
        <Row md={4}>
            <Col>1 of 3</Col>
            <Col xs={6}>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>



</>
);
}

export default ContainerExample;