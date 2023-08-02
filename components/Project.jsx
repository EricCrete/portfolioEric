import styles from '../styles/Project.module.css'
import Image from 'next/image';

export default function IndexPage(){
    return (
        
    <div className={styles.container}>
        <h1 className={styles.title}>Systeme Caisses</h1>
        <p className={styles.description}>
        Desktop App allowing users to select diferent items in different quantities and calculating the prices of both the items and of the total
        </p>
        <div className={styles.imageContainer}>
        <Image src="/Caisse.PNG" alt="Systeme Caisses" width={600} height={336} />
      </div>
        
    </div>
    );
    
};
