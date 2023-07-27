import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Swal from 'sweetalert2';





export default function Contact() {


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
    
    const CaptionElement = () => (
        // <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
            <h3
                style={{
                    borderRadius: "0.25em",
                    textAlign: "center",
                    color: "#3b2727",
                    padding: "0.5em",
                    marginLeft: "14px",
                    marginTop: "140px",

                }}
            >
                Contact Form
            </h3>
            <p style={{fontSize:"15pt"}}>Feel free to leave your details, so we can get in touch as quickly as possible</p>

        </div>
    );

    

                
    return (
        <div>

            <div className="container-lg" style={{ background: "white", maxWidth: "1000px", lineHeight: "15px" }}>
                <CaptionElement></CaptionElement>
             
        

                    <form style={{ border: "1px solid white" }} onSubmit={handleSubmit}>
                        <div style={{ margin: "0.5rem" }}>
                            <TextField name="firstName" label="First Name" style={{ width: "80%" }}  value={firstName}
            onChange={handleInputChange}/>
            {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
                        </div>
                        <div style={{ margin: "0.5rem" }}>
                            <TextField label="Last Name" name="lastName"  value={lastName}
            onChange={handleInputChange}style={{ width: "80%" }} />
                      {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}

                        </div>

                        <div style={{ margin: "0.5rem", border:"0px solid white" }}>
                            <TextField label="Email" name="email"  value={email}
            onChange={handleInputChange} style={{ width: "80%" }} />
                      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

                        </div>
                        <div>

                            <TextField label="Message" name="message" fullWidth multiline rows={5} value={message}
            onChange={handleInputChange}  style={{ margin: "0.5rem", width: "79%" }} />
                      {messageError && <p style={{ color: 'red' }}>{messageError}</p>}

                        </div>

                        <div style={{ margin: "0.5rem" }}>
                            <p>
                                Solve the following CAPTCHA:
                                <br />
                                {firstNumber} + {secondNumber} =
                            </p>
                            <TextField   name="captcha"  value={userAnswer} onChange={handleInputChange}style={{ margin: "0.5rem", width: "28%" }} />
                            {captchaError && <p style={{ color: 'red' }}>{captchaError}</p>}

                        </div>
                        


                        <div>
                            <Button  size="large" type="submit" variant="contained" color="success" >Submit</Button>
                            
                        </div>

                    </form>
               
            </div>
        </div>
    )
}