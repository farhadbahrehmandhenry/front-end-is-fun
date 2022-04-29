var itemsContainer = document.querySelector('.items');
var first = document.querySelector('.first');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var last = document.querySelector('.last');

window.addEventListener('DOMContentLoaded', async() => {
  var data = await fetch('https://jsonplaceholder.typicode.com/posts')
  var posts = await data.json();
  var postsPerPage = 10;
  var currentPage = 0;
  var totalPostsCount = posts.length;

  var renderPosts = (posts) => {
    itemsContainer.innerHTML = '';

    posts.forEach(post => {
      var postEl = document.createElement('li');
      postEl.innerText = `${post.id}- ${post.title}`; 
      itemsContainer.appendChild(postEl);
    });
  }

  renderPosts(posts.slice(postsPerPage * currentPage, postsPerPage));

  next.addEventListener('click', () => {
    if (postsPerPage * currentPage < totalPostsCount - postsPerPage) {
      currentPage++;
      console.log(posts, posts.slice(postsPerPage * currentPage, postsPerPage))
      renderPosts(posts.slice(postsPerPage * currentPage, (currentPage + 1) * postsPerPage));
    }
  });

  prev.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderPosts(posts.slice(postsPerPage * currentPage, (currentPage + 1) * postsPerPage));
    }
  });

  first.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage = 0;
      renderPosts(posts.slice(postsPerPage * currentPage, (currentPage + 1) * postsPerPage));
    }
  });

  last.addEventListener('click', () => {
    if (postsPerPage * currentPage < totalPostsCount - postsPerPage) {
      currentPage = Math.floor(totalPostsCount / postsPerPage) - 1;
      renderPosts(posts.slice(postsPerPage * currentPage, (currentPage + 1) * postsPerPage));
    }
  });
});