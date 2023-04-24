import styles from './Layout.module.css';
import SEO from '../SEO';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SEO />
      <div className={styles.main}>
        <main>{children}</main>
      </div>
    </div>
  );
}