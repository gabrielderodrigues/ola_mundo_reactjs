import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegation}>
        <Link className={styles.link} to='/'>
          Início
        </Link>
        <Link className={styles.link} to='/about-me'>
          Sobre Mim
        </Link>
      </nav>
    </header>
  );
};