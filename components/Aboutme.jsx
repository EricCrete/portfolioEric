
import styles from '../styles/Introduction.module.css'

export function Aboutme() {
  return (

    <div className={styles.introduction} >
        <h3 className={styles.title}>Eric Crete (Francais)</h3>
        <p className={styles.description}>
            Bonjours! Je m'appelle Eric Crete. Je suis un etudiant au college La Cite en programmation informatique. Ceci est un site comprenant 
            deux projets que j'ai fais pendant mon parcours ici (et oui ce site fait aussi partie des projets fait)
        </p>
    </div>
  );
}
