// Write your code here!
const postList = document.getElementById("post-list");

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.log(error);
  }
}

// Function to display posts
function displayPosts(posts) {
  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Call fetch function
fetchPosts();
