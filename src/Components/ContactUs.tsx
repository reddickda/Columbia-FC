import React, {  useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef(null);

  if(!form) {
    return;
  }
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if(!form.current){
      return;
    }
    
    emailjs.sendForm('service_alck8gn', 'template_rcey5s5', form.current, 'Cc6XZRzrs2B-yS2DH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
