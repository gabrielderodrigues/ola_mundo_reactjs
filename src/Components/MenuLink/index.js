import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
  const localization = useLocation();

  return (
    <Link className={`
        ${styles.link} 
        ${localization.pathname === to ? styles.linkHighlighted : ''}
      `} to={to}>
        {children}
    </Link>
  );
}