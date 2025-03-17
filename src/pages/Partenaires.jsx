import React from 'react';
    import { Card, Button } from 'react-bootstrap';

    const Partenaires = () => (
      <div className="container mt-5">
        <h1 className="text-center mb-5">Nos Partenaires</h1>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Pharmacie A</Card.Title>
                <Card.Text>
                  Adresse: 123 Rue des Pharmacies, Ville
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Pharmacie B</Card.Title>
                <Card.Text>
                  Adresse: 456 Rue des Pharmacies, Ville
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Pharmacie C</Card.Title>
                <Card.Text>
                  Adresse: 789 Rue des Pharmacies, Ville
                </Card.Text>
                <Button variant="primary">En savoir plus</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );

    export default Partenaires;
