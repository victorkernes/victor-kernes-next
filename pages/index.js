import Page from "../components/Page";
import Work from "../components/Work";

export default () => (
  <Page>
    <section className={"AboutMeSection"}>
      <div className={"Welcome"}>
        <h4 className={"Subtitle"}>Welcome</h4>
        <h1 className={"Title"}>It’s nice to meet you.</h1>
        <p className={"Context"}>
          My name is Victor Kernes and I’m a{" "}
          <a href="https://www.gradescope.com" target="_blank">
            Product Designer
          </a>
          . Take a look around and let me know if you need anything.
        </p>
        <a
          className={"HireMeButton"}
          href="https://calendly.com/victorkernes/30min"
          target="_blank"
        >
          <button className={"Contact"}>Get in touch</button>
        </a>
      </div>
    </section>
    <Work />
    <section className={"FeaturedContainer"}>
      <h4 className={"Subtitle"}>Learn More</h4>
      <h1 className={"Title"}>Podcasts and blogs I’m featured on.</h1>
      <p className={"LearnMoreLink"}>
        <a href="https://designdetails.fm/episodes/130517" target="_blank">
          242: Traitor Joe (feat. Victor Kernes) • Design Details
        </a>
      </p>
      <p className={"LearnMoreLink"}>
        <a
          href="https://medium.com/virta-health/my-experience-joining-a-design-team-in-healthcare-bc07fbfe41a4"
          target="_blank"
        >
          My Experience Joining a Design Team in Healthcare • Medium
        </a>
      </p>
      <p className={"LearnMoreLink"}>
        <a
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
