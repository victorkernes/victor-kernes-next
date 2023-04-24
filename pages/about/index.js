import Layout from '../../components/Layout';
import styles from "./About.module.css";

export default () => (
  <Layout>
    <section className={styles.Container}>
        <div className={styles.WorkExperienceSection}>
          <div className={styles.About}>
            <h1 className={styles.AboutIntro}>
              I’m a designer and writer in San Francisco. <br/>I currently work at <a href="https://www.hodinkee.com" target="_blank">Hodinkee</a>. I also write a <a href="presentable.news" target="_blank">newsletter</a> about style, travel, and design.
            </h1>
          </div>
          <div className={styles.WorkExperienceSection}>
            <h2 className={styles.SectionHeader}>Work Experience</h2>
            <div className={styles.WorkExperienceRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2021–Now</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a>Product Designer at Hodinkee</a>
                      </h4>
                      <p className={styles.Location}>San Francisco, CA / Remote</p>
                    </div>
                    <div>
                    <p className={styles.JobDescription}>I’m a Product Designer at Hodinkee, focusing on improving our e-commerce efforts and building a better online shopping experience for our customers. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.WorkExperienceRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2022-Now</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h3 className={styles.WorkTitle}>
                        <a>Product Design Mentor at Dribbble</a>
                      </h3>
                      <p className={styles.Location}>San Francisco, CA</p>
                    </div>
                    <div>
                      <p className={styles.JobDescription}>Over a 16-week program, I provided mentorship and design feedback for students enrolled in the Product Design course. I hosted weekly class sessions, where I covered topics from each lesson taught throughout the course.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.WorkExperienceRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2020–2021</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a>Product Designer at Gradescope</a>
                      </h4>
                      <p className={styles.Location}>San Francisco, CA / Remote</p>
                    </div>
                    <div>
                      <p className={styles.JobDescription}>I was a Product Designer on the Gradescope team, where my focus was designing our iOS app. I primarily worked on Essay Grading features, a new assignment type that allows instructors to grade long-form homework.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.WorkExperienceRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2017–2020</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a>User Experience Designer at Virta Health</a>
                      </h4>
                      <p className={styles.Location}>San Francisco, CA</p>
                    </div>
                    <div>
                      <p className={styles.JobDescription}>
                        I was the UX Designer at Virta Health where my focus was on creating a simplified enrollment process and optimizing patient conversion rate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.WorkExperienceSection}>
            <h2 className={styles.SectionHeader}>Education</h2>
              <div className={styles.WorkExperienceRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2012–2014</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a>The Art Institute of California</a>
                      </h4>
                      <p className={styles.Location}>San Francisco, CA</p>
                      <div>
                      <p className={styles.JobDescription}>
                        I learned about marketing, design, color theory, typography, and how to use Photoshop and InDesign.
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.WorkExperienceSection}>
            <h2 className={styles.SectionHeader}>Features</h2>
            <div className={styles.ContactRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2018</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a href="https://designdetails.fm/episodes/130517" target="_blank">Design Details – Episode 242</a>
                      </h4>
                      <p className={styles.Location}>designdetails.fm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ContactRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2018</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a href="https://medium.com/virta-health/my-experience-joining-a-design-team-in-healthcare-bc07fbfe41a4" target="_blank">My Experience Joining A Design Team In Healthcare</a>
                      </h4>
                      <p className={styles.Location}>medium.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ContactRow}>
                <div className={styles.WorkExperienceYearColumn}>
                  <h3 className={styles.WorkExperienceYear}>2018</h3>
                </div>
                <div className={styles.WorkExperienceInfoColumn}>
                  <div className={styles.WorkExperienceInfo}>
                    <div>
                      <h4 className={styles.WorkTitle}>
                        <a href="https://www.figma.com/blog/how-virta-health-uses-figma-to-help-patients-reverse-type-2-diabetes/" target="_blank">How Virta Health Uses Figma To Help Patients Reverse Type 2 Diabetes</a>
                      </h4>
                      <p className={styles.Location}>figma.com</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
  </Layout>
);