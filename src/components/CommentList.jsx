function CommentList({ comment }) {
  const { comment_id, votes, created_at, author, body, article_id } = comment;

  return (
    <>
      <li>
        <p>{body}</p>
        <p>{author}</p>
        <p>{created_at}</p>
        <p>{votes}</p>
      </li>
    </>
  );
}

export default CommentList;
