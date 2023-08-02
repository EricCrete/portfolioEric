import React, { useState } from 'react';
import styles from '../styles/AjouterTemoignage.module.css'
import { useDispatch } from 'react-redux';

const AjouterTemoignage = ({ ajouterTemoignage }) => {
  const [message, setMessage] = useState('');
  const [auteur, setAuteur] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauTemoignage = {
      message,
      auteur
    };
    dispatch({ type: 'AJOUTER_TEMOIGNAGE', payload: nouveauTemoignage });
    setMessage('');
    setAuteur('');
  };

  return (

    <div className={styles.form}> 
      <h1 className={styles.form__title}>Ajouter un témoignage</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.Message}htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={styles.Auteur}htmlFor="auteur">Auteur :</label>
          <input
            type="text"
            id="auteur"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.form__button}>Soumettre</button>
      </form>
    </div>
  );
};

export default AjouterTemoignage;