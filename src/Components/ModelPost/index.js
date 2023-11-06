import styles from './ModelPost.module.css';

export default function ModelPost({ fotoCapa, titulo, children }) {
  const fotoCapaBackgroundImage = `url(${fotoCapa})`;
  return (
    <article className={styles.postModeloContainer}>
      <div 
        className={styles.fotoCapa} 
        style={{ backgroundImage: fotoCapaBackgroundImage }}>
      </div>

      <h2 className={styles.titulo}>
        {titulo}
      </h2>

      <div className={styles.postConteudoContainer}>
        {children}
      </div>
    </article>
  );
}