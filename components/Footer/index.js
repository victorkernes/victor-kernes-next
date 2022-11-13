import styles from "./Footer.module.css"
import Nav from "../Nav"

const Footer = () => (
  <footer className={styles.Footer}>
    <Nav />
    <p className={styles.Copyright}>© 2022 Victor Kernes</p>
  </footer>
);
export default Footer;
