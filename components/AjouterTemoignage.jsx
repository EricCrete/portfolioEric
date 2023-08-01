import React, { useState } from 'react';
import styles from '../styles/Project.module.css'

const AjouterTemoignage = ({ ajouterTemoignage }) => {
  const [message, setMessage] = useState('');
  const [auteur, setAuteur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauTemoignage = {
      message,
      auteur
    };
    ajouterTemoignage(nouveauTemoignage);
    setMessage('');
    setAuteur('');
  };

  return (
    <div>
      <h2>Ajouter un témoignage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="auteur">Auteur :</label>
          <input
            type="text"
            id="auteur"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            required
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default AjouterTemoignage;