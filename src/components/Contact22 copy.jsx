import { height } from '@mui/system';
import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col, Stack, Card, Button, FloatingLabel } from 'react-bootstrap';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

export const Contact22 = () => {

    // const form = useRef();
    // const sendEmail = (e) =>{
    //     e.preventDefault();
    //     emailjs.sendForm(
    //         "YOUR_SERVICE_ID",
    //         "YOUR_TEMPLATE_ID",
    //         form.current,
    //         "YOUR_USER_ID"
    //     ).then(
    //         result => console.log(result.text),
    //         error => console.log(error.text)
    //     );
    // };
  return (
    <div   style={{ minHeight:"69.3vh"}}>
        <div style={{marginTop:"180px"}}></div>
     <Form  >
     <Container className='col-md-10 col-lg-7 mx-auto mt-5'>

        <h2>Contact Us</h2>
        <p style={{fontSize:"15pt"}}>Wanna listen recent updates from us. The Hurry to fill our Contact form</p>
      <Row>
        <Col  md="6">
        <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="First Name" />
      </FloatingLabel>
        </Col>
        <Col  md="6">
        <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Last Name" />
      </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
        </Col>
      </Row>
      <Row>
      <Col  md="6" className='mb-3'>
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
        </Col>
        <Col  md="6" >
        <Form>

        <Stack direction="horizontal" className='align-items-start'>
      <div className="p-2 "> 
      <Form.Label> <h5>Gender</h5>  </Form.Label>
      </div>
      <div className="p-2">
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
       </div>
    </Stack>   
    </Form>
        </Col>
      </Row>

      <Row>
      <Col  >
        <Form>

        <Stack direction="horizontal" className='align-items-start'>
      <div className="p-2 "> 
      <Form.Label> <h5>Skills</h5>  </Form.Label>
      </div>
      <div className="p-2">
      {[ 'checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="HTML5"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="CSS3"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="JavaScript"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Bootstrap5"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="ReactJS"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Figma"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="WordPress"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Photoshop"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="CorelDRAW"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
       </div>
    </Stack>   
    </Form>
        </Col>
      </Row>
      <Row>
        <Col>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col className='mt-3'>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree Terms & Conditions" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        
      <Stack direction="horizontal">
      <div className="p-2 "> 
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
      <div className="vr" />
      <div className="p-2"><Button variant="secondary">Reset</Button></div>
    </Stack>
        </Col>
      </Row>
    </Container>
    </Form>
    </div>
  )
}
