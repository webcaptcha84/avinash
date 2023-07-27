import React, { useState, useRef,useEffect} from 'react';
import {Form, Container, Row, Col, Stack,  Button, FloatingLabel } from 'react-bootstrap';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import axios from 'axios';

export const Contact22 = () => {
  const form = useRef();
    // const form = useRef();
    // const sendEmail = (e) =>{
    //     e.preventDefault();
    //     emailjs.sendForm(
    //       "service_z8ba50m",
    //       "template_u595a88",
    //       form.current,
    //       "vRU1mCSRVKZ8Mp0Ma"
    //     ).then(
    //         result => console.log(result.text),
    //         error => console.log(error.text)
    //     );
    // };

    
    

    const [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [captchaError, setCaptchaError] = useState('');

    const handleInputChange = (e) => {
        console.log(e);
       
        const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
      setFirstNameError(''); // Clear the error message
    } else if (name === 'lastName') {
      setLastName(value);
      setLastNameError(''); // Clear the error message
    } else if (name === 'email') {
      setEmail(value);
      setEmailError(''); // Clear the error message
    } else if (name === 'message') {
      setMessage(value);
      setMessageError(''); // Clear the error message
    } else if (name === 'captcha') {
      setUserAnswer(value);
      setIsCaptchaValid(parseInt(value) === firstNumber + secondNumber);
      setCaptchaError(''); // Clear the error message
    }
      };

      const handleSubmit = (e) => {
      

        e.preventDefault();
        let isValid = true;
    
        if (!firstName) {
          setFirstNameError('First Name is required');
          isValid = false;
        }
    
        if (!lastName) {
          setLastNameError('Last Name is required');
          isValid = false;
        }
    
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
          } else if (!isValidEmail(email)) {
            setEmailError('Invalid Email');
            isValid = false;
          }
    
        if (!message) {
          setMessageError('Message is required');
          isValid = false;
        }
    
        if (!isCaptchaValid) {
          setCaptchaError('CAPTCHA is incorrect');
          isValid = false;
        }
    
        if (isValid) {
          // Perform form submission
          console.log('Form submitted');
          // Reset form fields and CAPTCHA
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          generateCaptcha();
          showSuccessAlert();
        }


      
    
        emailjs.sendForm(
          "service_z8ba50m",
          "template_u595a88",
          form.current,
          "vRU1mCSRVKZ8Mp0Ma"
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );
   
      };
    
      const generateCaptcha = () => {
        setFirstNumber(Math.floor(Math.random() * 10) + 1);
        setSecondNumber(Math.floor(Math.random() * 10) + 1);
        setUserAnswer('');
        setIsCaptchaValid(false);
      };
      const isValidEmail = (email) => {
        // Email validation regex pattern
        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailPattern.test(email);
      };
      const showSuccessAlert = () => {
        Swal.fire({
            position: "center",
          icon: 'success',
          title: "Thank You!",
          text: 'Great for feeling your detail.. You will get updated bulletin from us',
          timer: 5000,
          
        });
      };
    



  return (
  <>
    <div   style={{ minHeight:"69.3vh"}}>
        <div style={{marginTop:"180px"}}></div>
     <Form  ref={form} onSubmit={handleSubmit}>
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
        <Form.Control type="text" placeholder="First Name"  name="firstName" value={firstName}
            onChange={handleInputChange}/>
             {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
      </FloatingLabel>
        </Col>
        <Col  md="6">
        <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
        
      >
        <Form.Control type="text" placeholder="Last Name" name="lastName" value={lastName}
            onChange={handleInputChange}/>
             {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
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
        <Form.Control type="email" placeholder="name@example.com"  name="email" value={email}
            onChange={handleInputChange}/>
             {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
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
        <FloatingLabel controlId="floatingTextarea2" label="Write message here.."  >
             
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          name="message" value={message}  onChange={handleInputChange} 
        />
      </FloatingLabel>{messageError && <p style={{ color: 'red' }}>{messageError}</p>}
        </Col>
      </Row>

      <Row className="justify-content-md-start mt-3">
        <Col>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree Terms & Conditions" />
      </Form.Group>
        </Col>
    </Row>
    <Row  className='float-end'>   
        <Col md="auto">
        <p>Solve the following CAPTCHA: <br />
        <div className='float-end'>{firstNumber} + {secondNumber} = </div></p>
        </Col>
        <Col>
        <Form.Control type="text"  name="captcha"  value={userAnswer} onChange={handleInputChange} style={{ margin: "0.5rem", width: "100%" }} />
        {captchaError && <p style={{ color: 'red' }}>{captchaError}</p>}
        </Col>
        <Col>    
          <Stack direction="horizontal">
            <div className="p-2 "> 
            <Button  size="large" type="submit" variant="success" color="info" >Submit</Button>
            </div>
          </Stack>
        </Col>
    </Row>
    </Container>
    </Form>
    </div>


</>
  )
}
