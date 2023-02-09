let users = [];

fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    users = data.results;
    displayUsers();
  });

function displayUsers() {
  let userList = "";
  users.forEach((user) => {
    userList += `
      <div class="user">
        <img src="${user.picture.medium}" alt="Profile Picture">
        <p>${user.gender === "male" ? "M." : "Mme."} ${user.name.first} ${user.name.last}</p>
        <p>${user.email}</p>
      </div>
    `;
  });
  document.body.innerHTML = userList;
}

