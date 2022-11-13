import styles from "./Nav.module.css";
// import Image from 'next/image';

const Nav = () => (
  <nav className={styles.Nav}>
    <ul className={styles.NavItemGroup}>
      <li className={styles.NavItem}>
        <a href="/" alt="Home">
          Home
        </a>
      </li>
      <li className={styles.NavItem}>
        <a href="/archive" alt="Archive">
          Articles
        </a>
      </li>
      <li className={styles.NavItem}>
        <a href="/bookmarks" alt="Bookmarks">
          Bookmarks
        </a>
      </li>
      <li className={styles.NavItem}>
        <a href="mailto: victorkernes@gmail.com" alt="Contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);
export default Nav;
