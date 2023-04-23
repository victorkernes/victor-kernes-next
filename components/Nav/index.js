import styles from "./Nav.module.css";
import Link from 'next/link';

const Nav = () => (
  <nav className={styles.Nav}>
      <Link className={styles.NavItem} href="/" alt="Home">Victor Kernes</Link>
      <ul className={styles.NavItemGroup}>
        <li className={styles.NavItem}><Link href="/archive">Writing</Link></li>
        <li className={styles.NavItem}><a href="/about">About</a></li>
        <li className={styles.NavItem}><a href="mailto: victorkernes@gmail.com">Contact</a></li>
      </ul>
  </nav>
);
export default Nav;