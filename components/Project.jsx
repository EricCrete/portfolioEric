import styles from '../styles/Project.module.css'

export default function IndexPage(){
    return (
        
    <div className={styles.container}>
        <h1 className={styles.title}>Systeme Caisses</h1>
        <p className={styles.description}>
        Desktop App allowing users to select diferent items in different quantities and calculating the prices of both the items and of the total
        </p>
        
    </div>
    );
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
};
