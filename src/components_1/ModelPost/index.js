import styles from './ModelPost.module.css';

export default function ModelPost({ fotoCapa, titulo, children }) {
  const fotoCapaBackgroundImage = `url(${fotoCapa})`;
  return (
    <article className={styles.containerModelPost}>
      <div 
        className={styles.wallpaperPhoto} 
        style={{ backgroundImage: fotoCapaBackgroundImage }}>
      </div>

      <h2 className={styles.title}>
        {titulo}
      </h2>

      <div className={styles.containerContentPost}>
        {children}
      </div>
    </article>
  );
}