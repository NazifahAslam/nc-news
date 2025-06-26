export function getarticleById(id) {
  return fetch(`https://ncnews-iv7p.onrender.com/api/articles/${id}`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: 'Failed to fetch article',
        });
      }
      const jsonResponse = res.json();

      return jsonResponse;
    })
    .catch((error) => {
      console.log(error);
    });
}
