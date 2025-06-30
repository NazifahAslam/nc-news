import { getarticles } from '../apiArticle';
import { useEffect, useState } from 'react';

function TopicList({ searchTerm }) {
  const [topics, setTopic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getarticles(searchTerm)
      .then((topic) => {
        console.log(topic);
        setTopic(topic);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!topics) {
    return <p>No topics found on {searchTerm}</p>;
  }

  return (
    <>
      <ul>
        {topics.map(({ topic }) => {
          return topic;
        })}
      </ul>
    </>
  );
}

export default TopicList;
