let users = [
  {
    id: "1",
    image: "1",
    name: "Erica Badu",
    email: "e.badu@example.com",
    role: "Owner",
    isActive: true
  },
  {
    id: "2",
    image: "2",
    name: "Pat Nelsson",
    email: "p.nelsson@example.com",
    role: "Admin",
    isActive: true
  },
  {
    id: "3",
    image: "3",
    name: "Pending acceptance",
    email: "j.dog@example.com",
    role: "Standard",
    isActive: false
  },
  {
    id: "4",
    image: "4",
    name: "Amy Namy",
    email: "a.namy@example.com",
    role: "Standard",
    isActive: true
  },
  {
    id: "5",
    image: "5",
    name: "Victor D.",
    email: "v.d@example.com",
    role: "Standard",
    isActive: true
  },
  {
    id: "6",
    image: "6",
    name: "Olly",
    email: "o.hunter@example.com",
    role: "Standard",
    isActive: true
  }
];

const activeMembers = users => {
  const numOfActiveMembers = users.filter(user => user.isActive).length;
  const member = document.querySelector(".activeMembers");
  member.innerText = `${numOfActiveMembers} / ${users.length}`;
};

const table = document.querySelector(".list");
const btn = document.querySelector(".btn");
const inviteBtn = document.querySelector(".inviteBtn");

function createUser(user) {
  const tr = document.createElement("tr");
  const name = document.createElement("td");
  const email = document.createElement("td");
  const role = document.createElement("td");
  const cellBtn = document.createElement("td");
  cellBtn.classList.add("cellbtn");

  //binbtn
  const binimg = document.createElement("img");
  binimg.src = "./bin-icon.svg";
  binimg.classList.add("binbtn");

  binimg.addEventListener("click", function() {
    const newUsersList = users.filter(_user => {
      return _user.id !== user.id;
    });
    users = newUsersList;
    render();
    activeMembers(users);
  });

  const img = document.createElement("img");
  img.src = `./user_${user.image}.svg`;
  img.classList.add("avatar");

  const span = document.createElement("span");
  span.innerText = user.name;
  span.classList.add("name");

  name.appendChild(img);
  name.appendChild(span);

  email.innerText = user.email;
  role.innerText = user.role;

  tr.appendChild(name);
  tr.appendChild(email);
  tr.appendChild(role);
  tr.appendChild(cellBtn);
  cellBtn.appendChild(binimg);

  table.appendChild(tr);
}

btn.addEventListener("click", addNewUser);
inviteBtn.addEventListener("click", addNewUser);

const namesRandom = ["name1", "name2", "name3", "name4"];
const rolesRandom = ["role1", "role2", "role3"];

function addNewUser() {
  const randomNumber = Math.floor(Math.random() * namesRandom.length);
  const randomNumber2 = Math.floor(Math.random() * rolesRandom.length);
  const newUser = {
    id: new Date(),
    image: 3,
    name: namesRandom[randomNumber],
    email: `${namesRandom[randomNumber]}@example.com`,
    role: rolesRandom[randomNumber2],
    isActive: false
  };
  users.push(newUser);
  createUser(newUser);
  activeMembers(users);
}

function render() {
  table.innerHTML = "";
  users.forEach(user => {
    createUser(user);
  });
}
render();
activeMembers(users);
