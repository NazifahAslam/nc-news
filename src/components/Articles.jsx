import { useEffect, useState } from 'react';
import { getarticles } from '../api';
import Article from './Article';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getarticles()
      .then(({ articles }) => {
        console.log(articles);
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
          return <Article key={article.id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default Articles;
