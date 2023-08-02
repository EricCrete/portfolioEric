
import styles from '../styles/Project.module.css'
import Image from 'next/image';




    export default function Portfolio() {
      return (
          <div className={styles.container}>
            <h1 className={styles.title}>Old Timers</h1>
            <p className={styles.description}>
          Website allowing you to sign up to classes by using JS and databases
        </p>
        <div className={styles.imageContainer}>
        <Image src="/Oldies.PNG" alt="Oldies1" width={600} height={336} />
        </div>
        <div className={styles.imageContainer}>
        <Image src="/Oldies2.PNG" alt="Oldies2" width={600} height={336} />
        </div>
        <div className={styles.imageContainer}>
        <Image src="/Oldies3.PNG" alt="Oldies3" width={600} height={336} />
        </div>
            
          </div>
          
        );
      };