import Page from "../components/Page";
import Work from "../components/Work"

export default () => (
  <Page>
    <section className={"AboutMeSection"}>
      <h1 className={"f-headline AboutMeDescription"}>
        Hi, I’m Victor — Product Designer based in SF.
      </h1>
      <h3 className={"f1 AboutMeContext"}>
        Currently accepting freelance projects. Previously worked at{" "}
        <a href="https://www.virtahealth.com" target="_blank">
          Virta Health
        </a>
        .
      </h3>
      <h4 className={"f3 CaseStudies"}>
        <a
          className={"CaseStudiesButton"}
          href="https://www.dropbox.com/s/uy86nrrxoy87q6m/Victor%20Kernes%20%E2%80%93%20Portfolio%20%28Password%29.pdf"
          target="_blank"
        >
          Read Case Studies →
        </a>
      </h4>
    </section>
    <Work />
    <section className={"FeaturedContainer"}>
      <h2 className={"f1"}>Featured</h2>
      <p className={"f3"}>
        <a href="https://designdetails.fm/episodes/130517" target="_blank">
          242: Traitor Joe (feat. Victor Kernes) • Design Details
        </a>
      </p>
      <p className={"f3"}>
        <a
          href="https://medium.com/virta-health/my-experience-joining-a-design-team-in-healthcare-bc07fbfe41a4"
          target="_blank"
        >
          My Experience Joining a Design Team in Healthcare • Medium
        </a>
      </p>
      <p className={"f3"}>
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
