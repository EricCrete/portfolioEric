
import styles from '../styles/Project.module.css'
import Image from 'next/image';


/*export default function Portfolio({images}) {
    return (
        <div className={styles.Oldies}>
          <h1 className="title">Old Timers</h1>
          {images.map((element, index) =>
          <Image
          src={element.src} 
          alt={element.alt} 
          width={element.width} 
          height={element.height} 
          key={index} />
          
          
          )}
          
            
           
          
        </div>
      );
    };*/

    export default function Portfolio() {
      return (
          <div className={styles.container}>
            <h1 className={styles.title}>Old Timers</h1>
            <p className={styles.description}>
          Website allowing you to sign up to classes by using JS and databases
        </p>
            
          </div>
        );
      };