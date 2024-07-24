import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1>FALE CONOSCO</h1>
        <form action="https://formsubmit.co/contato@cfep.org.br" method="POST">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
