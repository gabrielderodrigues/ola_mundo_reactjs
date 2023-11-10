import styles from './Footer.module.css';
import { ReactComponent as RegisteredBrand } from 'assets/marca_registrada.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <RegisteredBrand />
      Developed by <a href="https://github.com/gabrielderodrigues">Gabriel</a>.
    </footer>
  );
}