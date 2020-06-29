import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.NavContainer}>
      <div className={styles.NavContainerLeft}>
        <ul className={styles.NavLinksLeft}>
          <li>
            <a href="/" alt="Home" className={styles.HomeLink}>
              <img src="../static/victor-kernes.svg" alt="logo" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.NavContainerRight}>
        <ul className={styles.NavLinksRight}>
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
              className={styles.NavLink}
              href="https://tinyletter.com/victorkernes"
              target="_blank"
            >
              Newsletter
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              href="mailto:victorkernes@gmail.com"
              alt="Get in touch"
              target="_blank"
              className={styles.NavLink}
            >
              <button className={styles.GetInTouch}>Get in touch</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
