import styles from './Layout.module.css';
import Link from 'next/link';
import SEO from '../SEO';
import Nav from '../Nav';
import Footer from '../Footer';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <SEO />
      <Nav />
      <div className={styles.main}>
        <main>{children}</main>
        {!home && (
            <Link href="/archive" className={styles.BackToThoughts}>Back</Link>
        )}
      </div>
      <Footer />
    </div>
  );
}