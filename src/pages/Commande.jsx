import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Commande = () => {
  const [medicament, setMedicament] = useState('');

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Commande en Ligne</h1>
      <Form>
        <Form.Group controlId="formMedicament">
          <Form.Label>Médicament</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le nom du médicament"
            value={medicament}
            onChange={(e) => setMedicament(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Rechercher
        </Button>
      </Form>
      <div className="mt-5">
        <h2>Pharmacies Partenaires Proches</h2>
        {/* Intégrer une carte ici */}
      </div>
    </div>
  );
};

export default Commande;
