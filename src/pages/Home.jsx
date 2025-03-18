import React from 'react';
    import { Card, Button } from 'react-bootstrap';

    const Home = () => (
      <div className="container mt-5">
        <h1 className="text-center mb-5">Bienvenue sur Allô Pharmacie</h1>
        <p className="text-center mb-5">Votre pharmacie en ligne de confiance.</p>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Commande en Ligne</Card.Title>
                <Card.Text>
                  Commandez vos médicaments en ligne et recevez-les rapidement.
                </Card.Text>
                <Button variant="primary">Commander</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Consultation en Ligne</Card.Title>
                <Card.Text>
                  Consultez un médecin en ligne et obtenez des conseils médicaux.
                </Card.Text>
                <Button variant="primary">Consulter</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Nos Partenaires</Card.Title>
                <Card.Text>
                  Découvrez nos partenaires et leurs offres spéciales.
                </Card.Text>
                <Button variant="primary">Nos Partenaires</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );

export default Home;
