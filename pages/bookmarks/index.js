import Layout from '../../components/Layout';
import styles from "./Bookmarks.module.css";

export default () => (
  <Layout>
    <section className={styles.Container}>
      <div className={styles.WorkExperienceSection}>
      <h1 className={styles.PageTitle}>Bookmarks</h1>
      <div className={styles.WorkExperienceSection}>
        <div className={styles.WorkExperienceRow}>
          <div className={styles.WorkExperienceInfoColumn}>
            <div className={styles.WorkExperienceInfo}>
              <div className={styles.ArticleTitle}>
                <a href="https://signalvnoise.com/posts/1430-hire-managers-of-one" target="_blank">
                <h2 className={styles.WorkTitle}>
                  Hire Managers Of One
                </h2>
                <p className={styles.SectionHeader}>signalvnoise.com</p>
                </a>
              </div>
            </div>
            <div className={styles.WorkExperienceInfo}>
              <div className={styles.ArticleTitle}>
                <a href="https://druriley.com/100-rules-2020/" target="_blank">
                <h2 className={styles.WorkTitle}>
                  100 Rules To Live By
                </h2>
                <p className={styles.SectionHeader}>druriley.com</p>
                </a>
              </div>
            </div>
            <div className={styles.WorkExperienceInfo}>
              <div className={styles.ArticleTitle}>
                <a href="https://www.psychologytoday.com/us/blog/pieces-mind/201207/radical-acceptance" target="_blank">
                <h2 className={styles.WorkTitle}>
                  Radical Acceptance
                </h2>
                <p className={styles.SectionHeader}>psychologytoday.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Layout>
);