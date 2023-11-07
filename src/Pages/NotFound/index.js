import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import MainButton from 'components/MainButton';
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.containerContent}>
        <span className={styles.text404}>
          404
        </span>

        <h1 className={styles.title}>
          Ops! Página não encontrada.
        </h1>

        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div 
          className={styles.containerButton}
          onClick={() => navigate(-1)}
        >
          <MainButton length="lg">
            Voltar
          </MainButton> 
        </div>

        <img 
          className={styles.dogPhoto}
          src={erro404}
          alt="cachorro de óculos vestido como humano."
        /> 
      </div>

      <div className={styles.whiteSpace}>
      </div>
    </>
  );
}