function Article({ article }) {
  console.log(article);

  const {
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
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{topic}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
      <p>Created at: {created_at}</p>
      <img src={article_img_url} />
    </li>
  );
}

export default Article;
