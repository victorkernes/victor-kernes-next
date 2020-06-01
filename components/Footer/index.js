import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContainer}>
      <h3 className={styles.FooterHeader}>Say Hello</h3>
      <div className={styles.LinksContainer}>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://twitter.com/victorkernes"
              target="_blank"
            >
              Twitter
            </a>
          </p>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://instagram.com/victorkernes"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://dribbble.com/victorkernes"
              target="_blank"
            >
              Dribbble
            </a>
          </p>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://github.com/victorkernes"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://www.youtube.com/channel/UCPKrAd94VZnWwv5mDnS1H9A"
              target="_blank"
            >
              YouTube
            </a>
          </p>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://www.linkedin.com/in/victorkernes/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
        <div className={styles.LinksColumn}>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="https://tinyletter.com/victorkernes"
              target="_blank"
            >
              Newsletter
            </a>
          </p>
          <p className={styles.LinkText}>
            <a
              className={"f3"}
              href="mailto:victorkernes@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </p>
        </div>
      </div>
      <div className={"Follow"}>
        <a
          className={"inline"}
          href="https://twitter.com/messages/compose?recipient_id=2913264487"
          target="_blank"
        >
          <img className={"Twitter"} src="../static/twitter.svg" />
          <p className={"TwitterText"}>Tweet a short message, if ya like 😏</p>
        </a>
      </div>
      <p className={styles.Developer}>
        Designed and Developed by Victor Kernes
      </p>
      <p className={styles.Copyright}>© 2020 Victor Kernes</p>
    </div>
  </footer>
);
export default Footer;