import styles from './Banner.module.css';
import coloredCircle from 'assets/circulo_colorido.png';
import myPhoto from 'assets/minha_foto.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className={styles.title}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragraph}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
      </div>

      <div className={styles.images}>
        <img 
          className={styles.coloredCircle} 
          src={coloredCircle} 
          aria-hidden={true} />

        <img 
          className={styles.myPhoto} 
          src={myPhoto}
          aria-hidden={true} />
      </div>
    </div>
  );
}