export function getArticleComments(id) {
  return fetch(`https://ncnews-iv7p.onrender.com/api/articles/${id}/comments`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: 'Failed to fetch article comments',
        });
      }
      const jsonResponse = res.json();
      return jsonResponse;
    })
    .catch((error) => {
      console.log(error);
    });
}
