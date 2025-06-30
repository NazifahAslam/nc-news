import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h2>Welcome to Our News, where we share stories on the web! </h2>
      <Link to="/articles">See Articles Here</Link>
      <br />
      <Link to="/users">See Users Here</Link>
      <br />
      <Link to="/topics">See Topics Here</Link>
    </>
  );
}

export default Home;
