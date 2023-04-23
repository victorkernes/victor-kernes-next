import Link from 'next/link';
import Layout from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/Date';
import { getSortedPostsData, getPostData } from '../../lib/posts';
import { format, parseISO } from 'date-fns';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const postsDataWithContent = await Promise.all(allPostsData.map(async post => {
    const content = await getPostData(post.id);
    return {
      ...post,
      contentHtml: content.contentHtml
    }
  }));
  
  const postsByYearAndMonth = {};
  postsDataWithContent.forEach(post => {
    const yearAndMonth = format(parseISO(post.date), 'yyyy-MM');
    if (!postsByYearAndMonth[yearAndMonth]) {
      postsByYearAndMonth[yearAndMonth] = [];
    }
    postsByYearAndMonth[yearAndMonth].push(post);
  });

  return {
    props: {
      postsByYearAndMonth
    }
  };
}

export default function Archive({ postsByYearAndMonth }) {
  return (
    <Layout>
      {Object.keys(postsByYearAndMonth).map(yearAndMonth => (
        <div className={utilStyles.listItem} key={yearAndMonth}>
          <h4 className={utilStyles.dateSeparator}>{format(parseISO(yearAndMonth), 'MMM yyyy')}</h4>
          <ul className={utilStyles.list}>
            {postsByYearAndMonth[yearAndMonth].map(({ id, date, title, description, contentHtml }) => (
              <li className={utilStyles.archiveListItem} key={id}>
                <div className={utilStyles.headingGroup}>
                  <h2 className={`${utilStyles.headingGroupTitle}`}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                  </h2>
                </div>
                <p>{description}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
                <small className={utilStyles.dateText}>
                  Posted on <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
}