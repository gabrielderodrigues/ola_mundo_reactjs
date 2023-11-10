import styles from './Banner.module.css';
import coloredCircle from 'assets/circulo_colorido.png';
import myPhoto from 'assets/minha_foto.jpeg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className={styles.title}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragraph}>
          Bem vindo ao meu espaço pessoal! Eu sou o Gabriel Oliveira, desenvolvedor fullstack na Avanade Brasil. Compartilho aqui vários conhecimentos que obtive ao longo dos meus estudos.
        </p>
      </div>

      <div className={styles.images}>
        <img 
          className={styles.coloredCircle} 
          src={coloredCircle} 
          aria-hidden={true} 
          alt="Circulo colorido"/>

        <img 
          className={styles.myPhoto} 
          src={myPhoto}
          aria-hidden={true} 
          alt='Foto do Gabriel'/>
      </div>
    </div>
  );
}