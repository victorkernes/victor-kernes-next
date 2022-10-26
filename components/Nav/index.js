import styles from "./Nav.module.css";
import Image from 'next/image';

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.ExpandNav}>
      <a href="/about" alt="Home">
          <img
            className={styles.NavItemIcon} src="/static/sidebar.svg"
          />
        </a>
    </div>
    <ul className={styles.NavItemGroup}>
      <li className={styles.NavItem}>
        <a href="/" alt="Home">
          <img
            className={styles.NavItemIcon} src="/static/home.svg"
          />
        </a>
      </li>
      <li className={styles.NavItem}>
        <a href="/archive" alt="Archive">
          <img
            className={styles.NavItemIcon} src="/static/archive.svg"
          />
        </a>
      </li>
      <li className={styles.NavItem}>
        <a href="/bookmarks" alt="Bookmarks">
          <img
            className={styles.NavItemIcon} src="/static/bookmarks.svg"
          />
        </a>
      </li>
      <li className={styles.NavItem}>
        <a href="mailto: victorkernes@gmail.com" alt="Contact">
          <img className={styles.NavItemIcon}
            src="/static/contact.svg"
          />
        </a>
      </li>
    </ul>
    <div className={styles.Avatar}>
      <a href="/about" alt="Home">
          <Image src="/static/victorkernes.webp" width="32" height="32" className={styles.Avatar}/>
        </a>
    </div>
  </nav>
);
export default Nav;
