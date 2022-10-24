import styles from "./Archive.module.css";

const Archive = () => (
  <section className={styles.Container}>
    <div className={styles.WorkExperienceSection}>
      <h1 className={styles.PageTitle}>Archive</h1>
      <div className={styles.WorkExperienceSection}>
        <div className={styles.WorkExperienceRow}>
          <div className={styles.WorkExperienceInfoColumn}>
            <div className={styles.WorkExperienceInfo}>
              <div className={styles.ArticleTitle}>
                <h2 className={styles.WorkTitle}>
                  <a>Right for You</a>
                </h2>
                <time className={styles.SectionHeader}>January 16</time>
              </div>
              <div>
              <p className={styles.AboutParagraph}>The hardest thing when figuring out your style is knowing what’s right for you.</p>
                <p className={styles.AboutParagraph}>It takes time. And, understanding the difference between what you like and what’s fashionable.</p>
                <p className={styles.AboutParagraph}>When I see people experimenting with colors, patterns, fits, and pushing gender boundaries, I find it inspiring. Most of the time though, those choices are based on fashion—the latest trends of today, influenced by the past.</p>
                <p className={styles.AboutParagraph}>It’s weird. Style wouldn’t exist without fashion and vice-versa. To me, style is when you decide to wear things that best express yourself.</p>
                <p className={styles.AboutParagraph}>Obviously, the clothes, shoes, and watches we buy depends on availability and proximity. Before online shopping, what we wore was based on where you could go to try things on and decide if it was if was actually for you.</p>
                <p className={styles.AboutParagraph}>The biggest difference today, is the thousands of places you can shop, whether that’s online, second-hand, new, vintage, through Instagram, and the list goes on and on. With all the ways to build out your wardrobe now, how can you make sure to buy things that are right for you?</p>
                <h4 className={styles.AboutParagraph}>Experiment</h4>
                <p className={styles.AboutParagraph}>Start trying out things you like. See how it fits with other pieces of your wardrobe. Understand how it makes you feel. My favorite feelings are confidence and luxuriousness. When something feels like it’s been made with quality materials and crafted by people who care about the clothes they make, that’s when I feel best.</p>
                <h4>Learn</h4>
                <p className={styles.AboutParagraph}>I’m confident with my decisions when I know more about the brands I’m buying from. Learn where their materials are sourced, figure out their point of view on clothing, and mostly, understand how their clothes fit your body. People come in all shapes and sizes. I’ve learned that some brands aren’t made for me.</p>
                <h4 className={styles.AboutParagraph}>Repeat</h4>
                <p className={styles.AboutParagraph}>You want to get it right the first time. I get it. The hard part about figuring out your style is that it requires a lot of trial and error. The best part is having a wardrobe full of clothes you can easily pair together that look great, and start to show the world what’s right for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Archive;
