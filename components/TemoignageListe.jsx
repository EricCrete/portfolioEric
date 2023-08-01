import React from 'react';
import styles from '../styles/Project.module.css'


const TemoignagesListe = ({ temoignages }) => {
  return (
    <div>
      <h2>Liste des témoignages</h2>
      {temoignages.map((temoignage, index) => (
        <div key={index}>
          <p>{temoignage.message}</p>
          <p>Par : {temoignage.auteur}</p>
        </div>
      ))}
    </div>
  );
};

export default TemoignagesListe;