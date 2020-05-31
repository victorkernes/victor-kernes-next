import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContainer}>
      <div>
        <h3 className={styles.FooterHeader}>Say Hello</h3>
      </div>
      <div className={styles.LinksContainer}>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a href="https://twitter.com/victorkernes" target="_blank">
              Twitter
            </a>
          </p>
          <p className={styles.LinkText}>
            <a href="https://instagram.com/victorkernes" target="_blank">
              Instagram
            </a>
          </p>
        </div>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a href="https://dribbble.com/victorkernes" target="_blank">
              Dribbble
            </a>
          </p>
          <p className={styles.LinkText}>
            <a href="https://github.com/victorkernes" target="_blank">
              GitHub
            </a>
          </p>
        </div>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a
              href="https://www.youtube.com/channel/UCPKrAd94VZnWwv5mDnS1H9A"
              target="_blank"
            >
              YouTube
            </a>
          </p>
          <p className={styles.LinkText}>
            <a href="https://www.linkedin.com/in/victorkernes/" target="_blank">
              Linkedin
            </a>
          </p>
        </div>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a href="https://tinyletter.com/victorkernes" target="_blank">
              Newsletter
            </a>
          </p>
          <p className={styles.LinkText}>
            <a href="mailto:victorkernes@gmail.com" target="_blank">
              Email
            </a>
          </p>
        </div>
      </div>
      <p className={styles.Copyright}>© Victor Kernes 2020</p>
    </div>
  </footer>
);
export default Footer;