import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import SEO from '../SEO';
import Nav from '../Nav';

const name = 'Victor Kernes';
export const siteTitle = 'Welcome to my new site';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <SEO />
      <Nav />
      <div className={styles.main}>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      </div>
    </div>
  );
}