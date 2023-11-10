import styles from './AboutMe.module.css';
import ModelPost from "components/ModelPost";
import coverPhoto from "assets/sobre_mim_capa.png";
import aboutMePhoto from "assets/sobre_mim_foto.jpeg";

export default function AboutMe() {
  return (
    <ModelPost
      fotoCapa={coverPhoto}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitle}>
        Olá, eu sou o Gabriel!
      </h3>

      <img 
        src={aboutMePhoto}
        alt="Foto do Gabriel"
        className={styles.aboutMePhoto}
      />

      <p className={styles.paragraph}>
          Oi, tudo bem? Eu sou desenvolvedor junior na Avanade Brasil e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragraph}>
          Minha história com programação começou na Faculdade dos Guararapes de Pernambuco (UNIFG). Aprendi lógica de programação e o básico com Java e SQL Server. Mas começei a me aprofundar muito no desenvolvimento web.
      </p>
      <p className={styles.paragraph}>
          Me inscrevi em diversos cursos na Udemy e no Youtube sobre programação web, onde aprendi HTML5, CSS3, lógica de programação e programação para web com Javascript e bootstrap 4.
      </p>
      <p className={styles.paragraph}>
          Foi na Avanade Brasil onde consegui meu primeiro estágio, aprofundando meus conhecimentos em Front-End com Angular e Typescript. Mas também tive oportunidade de participar do Back-End utilizando .NET e SQL Server me tornando um desenvolvedor Full-Stack.
      </p>
    </ModelPost>
  );
}