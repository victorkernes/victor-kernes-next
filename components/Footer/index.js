import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.Footer}>
    <ul className={styles.FooterItemGroup}>
      <li className={styles.FooterItem}>San Francisco, CA</li>
      <li className={styles.FooterItem}>© 2023</li>
    </ul>
  </footer>
);
export default Footer;
