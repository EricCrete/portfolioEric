import Image from 'next/image'
import Menu from './Menu'

import logo from '../public/logo.png'
import styles from '../styles/Header.module.css'

export default function Header({setPage}) {
    const title = 'Portfolio NextJS';

    return <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <Menu setPage={setPage}/>
        
    </header>
}
