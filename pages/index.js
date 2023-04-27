import Link from 'next/link';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getPostData } from '../lib/posts';
import Date from '../components/Date';
import Subscribe from '../components/Subscribe';

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

export default function Home({ latestPostData }) {
  const postData = latestPostData;
  return (
    <Layout home>
      <section className={utilStyles.article}>
        <aside>
          <h1>
            <Link href={`/posts/${latestPostData.id}`}>
              {latestPostData.title}
            </Link>
          </h1>
          <small className={utilStyles.dateText}>
            <Date dateString={postData.date} />
          </small>
        </aside>
        <div className={utilStyles.Content}>
          <div dangerouslySetInnerHTML={{ __html: latestPostData.contentHtml }} />
          <Link href="/archive" className={utilStyles.moreThoughts}>More Thoughts</Link>
          <Subscribe/>
        </div> 
      </section>
    </Layout>
  );
}