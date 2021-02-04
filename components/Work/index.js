import styles from "./Work.module.css";

const Work = () => (
  <section className={styles.ProjectsSection}>
    <div className={"Container"}>
      <h4 className={"Subtitle"}>Projects</h4>
    </div>
    <ul className={styles.ProjectList}>
      <li className={styles.ProjectItemFullWidth}>
        <a
          className={styles.ProjectItemContainer}
          href="https://volume.substack.com"
          target="_blank"
        >
          <div className={styles.ProjectItemDetails}>
            <h4 className={styles.ProjectItemInformation}>Volume</h4>
            <p className={styles.ProjectItemCategory}>Newsletter</p>
            <img
              className={styles.ProjectImage}
              src="../static/volume-newsletter.jpg"
            />
          </div>
        </a>
      </li>
      <li className={styles.ProjectItem}>
        <a
          className={styles.ProjectItemContainer}
          href="https://dribbble.com/shots/6491112-Apple-Remote-Icon"
          target="_blank"
        >
          <div className={styles.ProjectItemDetails}>
            <h4 className={styles.ProjectItemInformation}>Remote</h4>
            <p className={styles.ProjectItemCategory}>Icon Design</p>
            <img
              className={styles.ProjectImage}
              src="../static/remote-app-icon.jpg"
            />
          </div>
        </a>
      </li>
      <li className={styles.ProjectItem}>
        <a
          className={styles.ProjectItemContainer}
          href="https://dribbble.com/shots/6491112-Apple-Remote-Icon"
          target="_blank"
        >
          <div className={styles.ProjectItemDetails}>
            <h4 className={styles.ProjectItemInformation}>TV</h4>
            <p className={styles.ProjectItemCategory}>Icon Design</p>
            <img
              className={styles.ProjectImage}
              src="../static/remote-app-icon-update.jpg"
            />
          </div>
        </a>
      </li>
    </ul>
  </section>
);
export default Work;
