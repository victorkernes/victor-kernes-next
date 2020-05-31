import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.NavContainer}>
    <div className={styles.NavContainerLeft}>
      <ul className={styles.NavLinksLeft}>
        <li className="f4 bold">
          <a href="/" alt="Home" className={styles.HomeLink}>
            Victor Kernes
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.NavContainerRight}>
      <ul className={styles.NavLinksRight}>
        <li>
          <a
            href="../../static/Victor-Kernes-Resume.pdf"
            alt="Résumé"
            className={styles.NavLink}
            download
          >
            Résumé
          </a>
        </li>
        <li>
          <a
            href="https://blog.victorkernes.com"
            alt="Blog"
            className={styles.NavLink}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="mailto:victorkernes@gmail.com"
            alt="Contact"
            className={styles.NavLink}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
export default Nav;
