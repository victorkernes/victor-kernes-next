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
          <a href="https://www.hodinkee.com" target="_blank">
            HODINKEE
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
