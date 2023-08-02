import React from 'react';
import styles from '../styles/Project.module.css';
import { useSelector } from 'react-redux';

const TemoignagesListe = () => {
  const temoignages = useSelector((state) => state.temoignages);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des témoignages</h1>
      {temoignages.map((temoignage, index) => (
        <div key={index}>
          <p className={styles.description}>{temoignage.message}</p>
          <p className={styles.description}> Par : {temoignage.auteur}</p>
        </div>
      ))}
    </div>
  );
};

export default TemoignagesListe;