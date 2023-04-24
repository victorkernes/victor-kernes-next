import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={utilStyles.article}>
          <aside>
            <h1>{postData.title}</h1>
            <small className={utilStyles.dateText}>
              <Date dateString={postData.date} />
            </small>
          </aside>
          <div className={utilStyles.Content}>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <Link href="/archive" className={utilStyles.moreThoughts}>More Thoughts</Link>
          </div>
        </article>
      </Layout>
    );
  }