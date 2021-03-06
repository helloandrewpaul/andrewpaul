import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Contact = ({ className }) => {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_gacrepd',
        'template_d9pk6ld',
        e.target,
        'user_wBCrsl9hoAWr7r1NuEntM'
      )
      .then(
        (result) => {
          e.target.reset();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('error', error.text);
        }
      );
  };

  return (
    <BigWrap className={className}>
      <Wrap>
        <FormWrap
          className='contact-form'
          autocomplete='off'
          onSubmit={sendEmail}
        >
          <Input
            className='a'
            id='Name'
            placeholder='Name'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Name')}
            type='text'
            name='user_name'
            required={true}
          />
          <Input
            className='b'
            id='email'
            placeholder='Email'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Email')}
            type='email'
            name='user_email'
            required={true}
          />
          <Input
            className='c'
            id='Subject'
            placeholder='Subject'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Subject')}
            type='text'
            name='subject'
            required={true}
          />
          <TextArea
            className='d'
            id='message'
            placeholder='Message'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Message')}
            wrap='hard'
            type='text'
            name='message'
            required={true}
          />
          <ButtonWrap className='e' >
            <Success open={success}>
              Thank you for contacting me, I will get back to you quickly.
            </Success>
              <FormButton type='submit' name='send' >
                Send
              </FormButton>
          </ButtonWrap>
        </FormWrap>
      </Wrap>
    </BigWrap>
  );
};


const Success = styled.span`
  width: 70%;
  font-size: 0.875rem;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  margin-bottom: ${({ open }) => (open ? '15px' : '0')};
  opacity:${({ open }) => (open ? '1':'0')};
  transition: all 0.6s ease-in-out;
`;

const Wrap = styled.div`
  width: 37.5rem;
  margin: 0 auto;
  @media (max-width: 38.688rem) {
    width: 18.75rem;
  }
`;

const BigWrap = styled.div`
  width: 100vw;
  height: 100vh;
  transition: all 1s ease-out;
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FormButton = styled.button`
  border: 2px solid #faf7ff;
  padding: 0.313rem 0.625rem;
  background-color: #faf7ff;
  color: #030205;
  margin-left: 0.938rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #030205;
    color: #faf7ff;
    cursor: pointer;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 100%;
  @media (max-width: 38.688rem) {
    width: 19.625rem;
    align-items: flex-start;  }
`;

const TextArea = styled.textarea`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  height: 18.75rem;
  max-width: 100%;
  resize: none;
  border: 2px solid #faf7ff;
  background-color: #030205;
  color: #faf7ff;
  padding: 0.313rem;
  :focus {
    outline: none;
  }
`;

const Input = styled.input`
  max-width: 100%;
  border: 2px solid #faf7ff;
  background-color: #030205;
  color: #faf7ff;
  padding: 0.313rem;
  :focus {
    outline: none;
  }
`;

const FormWrap = styled.form`
  .a {
    grid-area: name;
  }
  .b {
    grid-area: email;
  }
  .c {
    grid-area: subject;
  }
  .d {
    grid-area: message;
  }
  .e {
    grid-area: button;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'name  email'
    'subject subject'
    'message message'
    'button button';
  gap: 1rem;
  width: 37.5rem;
  margin: 1rem auto;
  @media (max-width: 38.688rem) {
    width: 18.75rem;
    display: flex;
    flex-direction: column;
  }
`;

export default Contact;