import { Link } from 'react-router-dom';

function ArticleList({ article }) {
  const {
    article_id,
    title,
    author,
    topic,
    votes,
    comment_count,
    created_at,
    article_img_url,
  } = article;

  return (
    <li>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{topic}</p>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>
        <p>Created at: {created_at}</p>
        <img src={article_img_url} />
      </Link>
    </li>
  );
}

export default ArticleList;
