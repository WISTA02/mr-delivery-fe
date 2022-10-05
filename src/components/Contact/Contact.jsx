import React, { useRef } from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi';
// import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_xffh0gp', 'template_brhwsgx', form.current, 'FdRg-sb4wAkcxmhnO')
    .then((result) => {
        console.log(result.text,"send it successfully");
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section id='contact'>
      <h1 className='text-center text-black text-2xl font-bold mb-8 ' > Contant Us Now </h1>
      {/* Contact Me */}
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>wista@gmail.com</h5>
            <a href='mailto:wista@gmail.com' rel="noreferrer" target="_blank">Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+962787810864</h5>
            <a href='https://api.whatsapp.com/send?phone=962787810864' rel="noreferrer" target="_blank">Send A Message</a>
          </article>
        </div>
        {/*  Data Form */}
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message ' required></textarea>
          <button type='submit' className='btn bg-yellow-300 hover:bg-yellow-600 text-black '> Send a Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact