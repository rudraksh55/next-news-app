import Styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../component/toolbar";
export const Feed = ({ pageNumber, articles }) => {
  const route = useRouter();
  return (
      <div className='page-container'>
      <Toolbar />
    <div className={Styles.main}>
      {articles.map((article, index) => (
        <div key={index} className={Styles.post}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          {!!article.urlToImage && <img src={article.urlToImage} />}
        </div>
      ))}

<div className={Styles.paginator}>
          <div
            className={pageNumber === 1 ? Styles.disabled : Styles.active}
            onClick={() => {
              if (pageNumber > 1) {
                
                route.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Previous Page
          </div>

          <div>#{pageNumber}</div>

          <div
            className={pageNumber === 5 ? Styles.disabled : Styles.active}
            onClick={() => {
              if (pageNumber < 5) {
                
                route.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </div>
        </div>
      </div>
      </div>
  );
};
export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default Feed;
