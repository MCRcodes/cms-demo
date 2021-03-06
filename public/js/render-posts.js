async function getPosts() {
  try {
    const response = await fetch(`http://${window.location.host}/posts`);
    const posts = await response.json();

    return posts;

  } catch (error) {
    console.log(error)
  }  
}

function renderPost(postData) {
  const parent = document.getElementById('post-cards');

  const postCard = document.createElement('article');
  const title = document.createElement('h3');
  const date = document.createElement('h4');
  const image = document.createElement('img');
  const comment = document.createElement('p')

  postCard.className = 'post-card';

  title.innerHTML = postData.title;
  comment.innerHTML = postData.comment;
  date.innerHTML = new Date(postData.createdAt).toDateString();

  image.src = postData.imageUrl;

  postCard.appendChild(title);
  postCard.appendChild(date);
  postCard.appendChild(image);
  postCard.appendChild(comment);

  parent.appendChild(postCard);
}



async function renderPosts() {
  const posts = await getPosts();

  posts.forEach(post => renderPost(post));
}

renderPosts();