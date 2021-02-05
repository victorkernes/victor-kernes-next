import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.NavContainer}>
      <div className={styles.NavContainerLeft}>
        <ul className={styles.NavLinksLeft}>
          <li>
            <a href="/" alt="Home" className={styles.HomeLink}>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.HomeLinkFill}
                alt="Logo"
              >
                <path d="M9.5276 1.45279C10.6191 -0.484263 13.3809 -0.484265 14.4724 1.45279L17.3695 6.59396L13.6073 13.2704C13.5714 13.3341 13.5738 13.4025 13.6074 13.4619C13.624 13.4912 13.6443 13.5101 13.6613 13.5205C13.6757 13.5293 13.6928 13.5357 13.7196 13.5357H21.2811L23.6262 17.6973C24.6826 19.572 23.3872 22 21.1538 22H2.84621C0.612817 22 -0.682631 19.572 0.373804 17.6973L9.5276 1.45279ZM12.9739 2.27534C12.5359 1.49796 11.4641 1.49796 11.0261 2.27534L1.87228 18.5198C1.40229 19.3539 2.02041 20.3077 2.84621 20.3077H21.1538C21.9796 20.3077 22.5977 19.3539 22.1277 18.5198L20.2728 15.228H13.7196C12.251 15.228 11.434 13.6454 12.1088 12.4479L15.4075 6.59396L12.9739 2.27534Z" />
              </svg>
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
              target="_blank"
              className={styles.NavLink}
            >
              Blog
            </a>
          </li>
          <li>
            <a className={styles.NavLink} href="/about">
              About
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
          <li>|</li>
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
