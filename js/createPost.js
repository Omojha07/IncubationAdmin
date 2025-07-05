document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("postForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var title = document.getElementById("postTitle").value.trim();
        var content = document.getElementById("postContent").value.trim();

        if (title === "" || content === "") {
            alert("Please fill in all fields before posting.");
            return;
        }

        var postContainer = document.getElementById("postsContainer");
        var newPost = document.createElement("div");
        newPost.className = "card mt-3 shadow-sm";
        newPost.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
                <p class="text-muted small">Posted on: ${new Date().toLocaleString()}</p>
                <button class="btn btn-danger btn-sm deletePostBtn">Delete</button>
            </div>
        `;

        postContainer.prepend(newPost);
        document.getElementById("postForm").reset();
        var modal = new bootstrap.Modal(document.getElementById("createPostModal"));
        modal.hide();

        // Add delete functionality
        newPost.querySelector(".deletePostBtn").addEventListener("click", function() {
            newPost.remove();
        });
    });
});