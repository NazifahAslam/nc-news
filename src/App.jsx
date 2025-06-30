//import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Comments from './components/comments';
import Users from './components/Users';
import Topics from './components/Topics';
import './App.css';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/articles/:id/comments" element={<Comments />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Topics" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
