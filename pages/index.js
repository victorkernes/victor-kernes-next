import Page from "../components/Page";
import Work from "../components/Work";

export default () => (
  <Page>
    <section className={"AboutMeSection"}>
      <div className={"Welcome"}>
        <h4 className={"Subtitle"}>Welcome</h4>
        <h1 className={"Title"}>Hello, I’m Victor</h1>
        <p className={"Context"}>
          I’m a Product Designer at{" "}
          <a href="https://www.gradescope.com" target="_blank">
            Gradescope
          </a>
          {""}, living in San Francisco. Take a look around and let me know if
          you need anything.
        </p>
        <div className={"ContactButtons"}>
          <a className={"LearnMore"} href="/about" alt="Learn More">
            <button className={"LearnMoreButton"}>Learn more</button>
          </a>
          <a href="https://twitter.com/victorkernes" target="_blank">
            <button>Follow me on Twitter</button>
          </a>
        </div>
      </div>
    </section>
    <Work />
    <section className={"ArticleSection"}>
      <div className={"Welcome"}>
        <h4 className={"Subtitle"}>Blog</h4>
        <h1 className={"Title"}>See what I’m writing about</h1>
      </div>
      <div className={"Articles"}>
        <ul className={"ArticlesContainer"}>
          <a
            className={"Article"}
            href="https://blog.victorkernes.com/my-first-day-at-gradescope"
            target="_blank"
          >
            <li className={"ArticleContainer"}>
              <span className={"ArticleCategory"}>Design</span>
              <h2 className={"ArticleTitle"}>My First Day at Gradescope</h2>
              <p>Jun 24, 2020</p>
            </li>
          </a>
          <a
            className={"Article"}
            href="https://blog.victorkernes.com/wishlist-for-apple-wwdc-2020"
            target="_blank"
          >
            <li className={"ArticleContainer"}>
              <span className={"ArticleCategory"}>Software</span>
              <h2 className={"ArticleTitle"}>Wishlist for Apple WWDC 2020</h2>
              <p>Jun 20, 2020</p>
            </li>
          </a>
          <a
            className={"Article"}
            href="https://blog.victorkernes.com/the-job-hunt-is-over"
            target="_blank"
          >
            <li className={"ArticleContainer"}>
              <span className={"ArticleCategory"}>Design</span>
              <h2 className={"ArticleTitle"}>The Job Hunt is Over</h2>
              <p>Jun 3, 2020</p>
            </li>
          </a>
        </ul>
        <p className={"MoreBlogPosts"}>
          <a href="https://blog.victorkernes.com" alt="See all blog posts">
            See all blog posts →
          </a>
        </p>
        {/* <form
          className={"SubscribeForm"}
          action="https://tinyletter.com/victorkernes"
          method="post"
          target="popupwindow"
          onSubmit="window.open('https://tinyletter.com/victorkernes', 'popupwindow');return true"
        >
          <div className={"SubscribeFormContainer"}>
            <p>
              <input
                className={"SubscribeInput"}
                type="text"
                placeholder="Your email"
                name="email"
                id="tlemail"
              />
            </p>
            <input type="hidden" value="1" name="embed" />
            <button
              className={"SubscribeButton"}
              type="submit"
              value="Subscribe"
            >
              Subscribe
            </button>
          </div>
        </form> */}
      </div>
    </section>
    <section className={"FeaturedContainer"}>
      <h4 className={"Subtitle"}>Learn More</h4>
      <h1 className={"Title"}>Podcasts and blogs I’m featured on</h1>
      <p className={"LearnMore"}>
        <a
          className={"LearnMoreLink"}
          href="https://designdetails.fm/episodes/130517"
          target="_blank"
        >
          242: Traitor Joe (feat. Victor Kernes) • Design Details
        </a>
      </p>
      <p className={"LearnMore"}>
        <a
          className={"LearnMoreLink"}
          href="https://medium.com/virta-health/my-experience-joining-a-design-team-in-healthcare-bc07fbfe41a4"
          target="_blank"
        >
          My Experience Joining a Design Team in Healthcare • Medium
        </a>
      </p>
      <p className={"LearnMore"}>
        <a
          className={"LearnMoreLink"}
          href="https://www.figma.com/blog/how-virta-health-uses-figma-to-help-patients-reverse-type-2-diabetes/"
          target="_blank"
        >
          How Virta Health uses Figma to help patients reverse type 2 diabetes •
          Figma
        </a>
      </p>
    </section>
  </Page>
);
