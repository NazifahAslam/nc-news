export function getarticles() {
  return fetch(`https://ncnews-iv7p.onrender.com/api/articles`).then((res) => {
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: 'Failed to fetch articles',
      });
    }
    return res.json();
  });
}
