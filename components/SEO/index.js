import Head from "next/head";

export default function SEO() {
  return (
    <React.Fragment>
      <Head>
        <script>
          var clicky_site_ids = clicky_site_ids || [];
          clicky_site_ids.push(101217952);
        </script>
        <script async src="//static.getclicky.com/js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../static/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="../../static/favicon/site.webmanifest"
        ></link>
        <title>Victor Kernes</title>
      </Head>
    </React.Fragment>
  );
}