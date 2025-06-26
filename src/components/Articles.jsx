import { useEffect, useState } from 'react';
import { getarticles } from '../apiArticle';
import ArticleList from './ArticleList';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getarticles()
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!articles) {
    return <p>No articles found on {searchTerm}</p>;
  }

  return (
    <>
      <ul>
        {articles.map((article) => {
          return <ArticleList key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default Articles;
