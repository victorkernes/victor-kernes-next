import Page from "../components/Page";

export default () => (
  <Page>
    <section className={"AboutMeSection"}>
      <h1 className={"AboutMeBlurb"}>
        I’m a multidisciplinary designer, specializing in mobile product design,
        web design, and front-end development.
      </h1>
      <h4 className={"WorkingFromHome"}>
        <a
          className={"CaseStudiesButton"}
          href="https://www.dropbox.com/s/uy86nrrxoy87q6m/Victor%20Kernes%20%E2%80%93%20Portfolio%20%28Password%29.pdf"
          target="_blank"
        >
          Read Case Studies →
        </a>
      </h4>
      <div className={"Follow"}>
        <a
          className={"inline"}
          href="https://twitter.com/messages/compose?recipient_id=2913264487"
          target="_blank"
        >
          <img className={"Twitter"} src="../static/twitter.svg" />
          <p className={"TwitterText"}>Tweet a short message, if ya like 😏</p>
        </a>
      </div>
    </section>
    <section className={"FeaturedContainer"}>
      <h2>Featured</h2>
      <p>
        <a href="https://designdetails.fm/episodes/130517" target="_blank">
          242: Traitor Joe (feat. Victor Kernes) • Design Details
        </a>
      </p>
      <p>
        <a
          href="https://medium.com/virta-health/my-experience-joining-a-design-team-in-healthcare-bc07fbfe41a4"
          target="_blank"
        >
          My Experience Joining a Design Team in Healthcare • Medium
        </a>
      </p>
      <p>
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
