import { useState } from 'react';

function TopicSearchForm() {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Topics
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          maxLength={70}
        />
      </label>
      <button type="submit">Search Topics</button>
    </form>
  );
}

export default TopicSearchForm;
