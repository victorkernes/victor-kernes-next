import styles from "./Work.module.css";

const Work = () => (
  <section className={styles.ProjectsSection}>
    <h3 className={styles.ProjectHeader}>Work</h3>
    <ul className={styles.ProjectList}>
      <li className={styles.ProjectItem}>
        <a
          className={styles.ProjectItemContainer}
          href="https://dribbble.com/shots/6491112-Apple-Remote-Icon"
          target="_blank"
        >
          <div className={styles.ProjectItemDetails}>
            <h4 className={styles.ProjectItemInformation}>Remote</h4>
            <p className={styles.ProjectItemCategory}>App Icon</p>
            <img
              className={styles.ProjectImage}
              src="../static/remote-app-icon.png"
            />
          </div>
        </a>
      </li>
    </ul>
  </section>
);
export default Work;