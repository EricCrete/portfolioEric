import styles from '../styles/Menu.module.css'


export default function Menu({setPage}) {
    return <nav className={styles.navMenu}>
    <ul>
      <li><a href="#" onClick={() => setPage('acceuil')}>Introduction</a></li>
      <li><a href="#" onClick={() => setPage('project')}>Systeme Caisses</a></li>
      <li><a href="#" onClick={() => setPage('project2')}>Oldies</a></li>
    </ul>
  </nav>
}