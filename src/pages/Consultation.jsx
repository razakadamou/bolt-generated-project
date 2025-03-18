import React, { useState } from 'react';
    import { Form, Button } from 'react-bootstrap';
    import DatePicker from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css';

    const Consultation = () => {
      const [date, setDate] = useState(new Date());

      return (
        <div className="container mt-5">
          <h1 className="text-center mb-5">Consultation en Ligne</h1>
          <Form>
            <Form.Group controlId="formDate">
              <Form.Label>Date et Heure</Form.Label>
              <DatePicker selected={date} onChange={(date) => setDate(date)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} dateFormat="Pp" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Réserver
            </Button>
          </Form>
          <div className="mt-5">
            <h2>Formulaire de Consultation</h2>
            {/* Ajouter un formulaire de consultation ici */}
          </div>
        </div>
      );
    };

    export default Consultation;
