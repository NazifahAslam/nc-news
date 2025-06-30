import TopicSearchForm from './TopicSearchForm';
import TopicList from './topicList';
import { useState } from 'react';

function Topics() {
  const [searchTerm, setSearchTerm] = useState('football');

  return (
    <>
      <TopicSearchForm setSearchTerm={setSearchTerm} />
      <TopicList searchTerm={searchTerm} />
    </>
  );
}

export default Topics;
