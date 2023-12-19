let form = document.getElementById("form");
let input = document.getElementById("input");
let pesan = document.getElementById("pesan");
let posts = document.getElementById("posts");

// form validation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    alert("pesan nya gaboleh kosong ya..");
    console.log("fail");
  } else {
    console.log("success");
    pesan.innerHTML = "";
    acceptData();
  }
};

// end form validation

// accept data dari input fields

let data = {};

let acceptData = () => {
  data("text") = input.value;
  console.log(data);

  createPost();
};

// end

// create post

let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
  input.value = "";
};

//   delete post

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// edit post

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
