import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/Date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// How to just get the latest post for the latest entry?

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <main>
        <h1 className={`${utilStyles.headingLg}`}><a>Title of My Latest Post</a></h1>
        <p>Trying to see how my site reacts if I add in content here. How would it work if my post had multiple paragraphs. Could I create an API to render the content here?</p>
        <p>Trying to see how my site reacts if I add in content here. How would it work if my post had multiple paragraphs. Could I create an API to render the content here?</p>
        <p>Trying to see how my site reacts if I add in content here. How would it work if my post had multiple paragraphs. Could I create an API to render the content here?</p>
        <p>Trying to see how my site reacts if I add in content here. How would it work if my post had multiple paragraphs. Could I create an API to render the content here?</p>
        <p>Trying to see how my site reacts if I add in content here. How would it work if my post had multiple paragraphs. Could I create an API to render the content here?</p>
        <p>Trying to see how my site reacts if I add in content here. How would it work if my post had multiple paragraphs. Could I create an API to render the content here?</p>
      </main>
      <section className={`${utilStyles.headingSm} ${utilStyles.padding40px}`}>
        <h3>More Writing</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <a>More</a>
      </section>
    </Layout>
  );
}