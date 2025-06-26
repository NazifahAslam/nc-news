import { useParams } from 'react-router-dom';
import { getarticleById } from '../apiArticleId';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';

function Article() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getarticleById(id)
      .then(({ article }) => {
        setArticle(article);
        setError(null);
      })
      .catch((error) => {
        setError('failed to load article');
        setArticle(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>No article found on {id}</p>;
  }

  const {
    article_id,
    title,
    author,
    body,
    topic,
    votes,
    comment_count,
    created_at,
    article_img_url,
  } = article;

  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{body}</p>
      <p>{topic}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
      <p>Created at: {created_at}</p>
      <img src={article_img_url} />
      {<Comments />}
    </>
  );
}

export default Article;
