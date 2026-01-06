const apiURL = "https://jsonplaceholder.typicode.com/posts";
const postList = document.getElementById("post-list");

// Function to display posts
function displayPosts(posts) {
  // Clear any previous posts
  postList.innerHTML = "";

  // Loop through posts
  posts.forEach(post => {
    const li = document.createElement("li");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Fetch posts using async/await
async function fetchPosts() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    displayPosts(posts); // Display the posts on the page
  } catch (error) {
    postList.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
    console.error("Error fetching posts:", error);
  }
}

// Call the fetch function
fetchPosts();
