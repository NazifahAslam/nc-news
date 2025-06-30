import { useParams } from 'react-router-dom';
import { getArticleComments } from '../commentsApi';
import { useEffect, useState } from 'react';
import CommentList from './CommentList';

function Comments() {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getArticleComments(id)
      .then(({ comments }) => {
        setComments(comments);
        setError(null);
      })
      .catch((error) => {
        setError('failed to load article comments');
        setComments(null);
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

  if (!comments) {
    return <p>No comments found on {id} article</p>;
  }

  return (
    <>
      <ul>
        {comments.map((comment) => {
          return <CommentList key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </>
  );
}

export default Comments;
