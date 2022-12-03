import styles from "./HomeContent.module.css";
import Footer from "../Footer"

const Home = () => (
  <section className={styles.Container}>
    <div className={styles.WorkExperienceSection}>
      <div className={styles.About}>
        <div className={styles.AboutTitleContainer}>
          <a href="/" alt="Home">
            <h1 className={styles.AboutTitle}>Victor Kernes</h1>
          </a>
        </div>
        <p className={styles.AboutParagraph}>
          I’m a product designer and writer, based in San Francisco, currently working at <a href="https://www.hodinkee.com" target="_blank">Hodinkee</a>. I’m <i>obsessed</i> with the future. I’m most interested in menswear, design, and technology.
        </p>
      </div>
      <div className={styles.WorkExperienceSection}>
        <h2 className={styles.SectionHeader}>Contact</h2>
          <div className={styles.ContactRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>Email</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <p className={styles.Location}><a href="
                  mailto: victorkernes@gmail.com" target="_blank">victorkernes@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ContactRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>Twitter</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <p className={styles.Location}><a href="https://twitter.com/victorkernes" target="_blank">@victorkernes</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ContactRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>Figma</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <p className={styles.Location}><a href="https://twitter.com/victorkernes" target="_blank">@victorkernes</a></p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.WorkExperienceSection}>
        <h2 className={styles.SectionHeader}>Work Experience</h2>
          <div className={styles.WorkExperienceRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>2022 – Now</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <h4 className={styles.WorkTitle}>
                    <a>Product Design Mentor at Dribbble</a>
                  </h4>
                  <p className={styles.Location}>San Francisco, CA</p>
                </div>
                <div>
                  <p>Over 12 weeks, I provide mentorship and feedback for students. I also host weekly sessions, which cover lessons taught throughout the course.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.WorkExperienceRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>2021 – Now</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <h4 className={styles.WorkTitle}>
                    <a>Product Designer at Hodinkee</a>
                  </h4>
                  <p className={styles.Location}>San Francisco, CA</p>
                </div>
                <div>
                  <p>I’m a Product Designer at Hodinkee, focusing on improving our e-commerce efforts and building a better online shopping experience for our customers. </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.WorkExperienceRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>2020 – 2021</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <h4 className={styles.WorkTitle}>
                    <a>Product Designer at Gradescope</a>
                  </h4>
                  <p className={styles.Location}>San Francisco, CA</p>
                </div>
                <div>
                  <p>I was a Product Designer on the Gradescope team, where my focus was designing our iOS app. I primarily worked on Essay Grading features, a new assignment type that allows instructors to grade long-form homework.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.WorkExperienceRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>2017 – 2020</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <h4 className={styles.WorkTitle}>
                    <a>UX Designer at Virta Health</a>
                  </h4>
                  <p className={styles.Location}>San Francisco, CA</p>
                </div>
                <div>
                  <p>I was the UX Designer at Virta Health where my focus was on creating a simplified enrollment process and optimizing patient conversion rate. </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.WorkExperienceSection}>
        <h2 className={styles.SectionHeader}>Education</h2>
          <div className={styles.WorkExperienceRow}>
            <div className={styles.WorkExperienceYearColumn}>
              <h3 className={styles.WorkExperienceYear}>2012 – 2014</h3>
            </div>
            <div className={styles.WorkExperienceInfoColumn}>
              <div className={styles.WorkExperienceInfo}>
                <div>
                  <h4 className={styles.WorkTitle}>
                    <a>The Art Institute of California, San Francisco</a>
                  </h4>
                  <p className={styles.Location}>Fashion Marketing</p>
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
    <Footer />
  </section>
);
export default Home;
