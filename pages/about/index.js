import Page from "../../components/Page";

export default () => (
  <Page>
    <section className={"AboutMeSection"}>
      <h1 className={"Title"}>About</h1>
      <p className={"Context"}>
        My name is{" "}
        <a href="/" alt="Victor Kernes Home">
          Victor Kernes
        </a>{" "}
        and I am a Product Designer in San Francisco working at{" "}
        <a href="https://www.hodinkee.com" target="_blank">
          Hodinkee
        </a>
        .
      </p>
      <p className={"Context"}>
        In the past, I’ve worked for startups in healthcare and education.
      </p>
      <p className={"Context"}>
        If you would like to get in touch, feel free to{" "}
        <a href="mailto:victorkernes@gmail.com">email me</a>.
      </p>
    </section>
  </Page>
);
