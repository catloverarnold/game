// Add this code to handle the "Next" button for Instagram posts
document.addEventListener('DOMContentLoaded', () => {
  // ... existing game code ...

  const posts = document.querySelectorAll('#instagram-container blockquote');
  let currentPost = 0;

  document.getElementById('next-post').addEventListener('click', () => {
    posts[currentPost].style.display = 'none';
    currentPost = (currentPost + 1) % posts.length;
    posts[currentPost].style.display = 'block';
  });
});
