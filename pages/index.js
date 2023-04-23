import Link from 'next/link';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/Date';
import { getSortedPostsData, getPostData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const latestPostData = allPostsData[0]; // latest post will be the first item in the array
  const latestPostContent = await getPostData(latestPostData.id);
  return {
    props: {
      allPostsData,
      latestPostData: {
        ...latestPostData,
        contentHtml: latestPostContent.contentHtml,
      },
    },
  };
}

export default function Home({ allPostsData, latestPostData }) {
  return (
    <Layout home>
      <section className={utilStyles.listItem}>
        <h1>
          <Link href={`/posts/${latestPostData.id}`}>
            {latestPostData.title}
          </Link>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: latestPostData.contentHtml }} />
      </section>
      <section>
        <h2>Thoughts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.moreThoughts} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <small className={utilStyles.dateText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
      <Link href="/archive" className={utilStyles.viewAllThoughts}>More</Link>
    </section>
  </Layout>
);
}