import React from 'react';

    const Contact = () => (
      <div className="container mt-5">
        <h1 className="text-center mb-5">Contact et Assistance</h1>
        {/* Ajouter un formulaire de contact et un chat intégré */}
<form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nom</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
    <div className="mt-5">
      <h2 className="text-center mb-4">Chat en direct</h2>
      {/* Intégrer un widget de chat ici */}
      <div className="chat-widget">
        {/* Placeholder for chat widget */}
      </div>
    </div>
      </div>
    );

export default Contact;
