import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContainer}>
      <div>
        <p className={styles.Copyright}>© 2022 Victor Kernes</p>
      </div>
      <div className={styles.LinksContainer}>
        <ul className={styles.LinksList}>
          <li>
            <a href="https://twitter.com/victorkernes" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/victorkernes" target="_blank">
              Dribbble
            </a>
          </li>
          <li>
            <a href="https://github.com/victorkernes" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
export default Footer;
