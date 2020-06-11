import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.NavContainer}>
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
            <a href="/#Work" alt="Work" className={styles.NavLink}>
              Work
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
              href="/about"
              alt="About"
              className={styles.NavLink}
            >
             About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
