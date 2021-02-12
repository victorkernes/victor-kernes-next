import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.NavContainer}>
      <div className={styles.NavContainerLeft}>
        <ul className={styles.NavLinksLeft}>
          <li className={styles.NavHomeLink}>
            <a href="/" alt="Home">
              <img
                src="/static/victor-kernes.png"
                className={styles.HomeLink}
              />
            </a>
          </li>
          <li>
            <a href="/" alt="Home" className={styles.NavLink}>
              Home
            </a>
          </li>
          <li>
            <a className={styles.NavLink} href="/about">
              About
            </a>
          </li>
          <li>
            <a
              href="https://blog.victorkernes.com"
              alt="Blog"
              target="_blank"
              className={styles.NavLink}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className={styles.NavLink}
              href="https://volume.substack.com"
              target="_blank"
            >
              Substack
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.NavContainerRight}>
        <ul className={styles.NavLinksRight}>
          <li>
            <a
              href="mailto:victorkernes@gmail.com"
              alt="Send an email"
              target="_blank"
              className={styles.NavLink}
            >
              <button className={styles.GetInTouch}>Email</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
