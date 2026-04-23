const API = "http://localhost:8000/api/v1";

// ---------------- HELPERS ----------------
function getToken() {
  return localStorage.getItem("token");
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

// ---------------- AUTH ----------------

// REGISTER
async function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    alert("Registered successfully ✅");
    window.location.href = "login.html";
  } else {
    alert(data.detail || "Registration failed");
  }
}

// LOGIN (FORM DATA)
async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `username=${email}&password=${password}`
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.access_token);
    window.location = "dashboard.html";
  } else {
    alert(data.detail || "Login failed");
  }
}

// ---------------- TASKS ----------------

// LOAD TASKS
async function loadTasks() {
  const token = getToken();

  if (!token) {
    logout();
    return;
  }

  const res = await fetch(`${API}/tasks/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (res.status === 401) {
    alert("Session expired");
    logout();
    return;
  }

  const tasks = await res.json();
  const list = document.getElementById("tasks");

  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <b>${task.title}</b> - ${task.description || ""}
      <button onclick="editTask(${task.id}, '${task.title}', '${task.description || ""}')">✏️</button>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;

    list.appendChild(li);
  });
}

// CREATE TASK
async function createTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;

  if (!title.trim()) {
    alert("Title required");
    return;
  }

  const res = await fetch(`${API}/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ title, description })
  });

  if (!res.ok) {
    alert("Error creating task");
    return;
  }

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";

  loadTasks();
}

// DELETE TASK
async function deleteTask(id) {
  const res = await fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!res.ok) {
    alert("Not allowed or error deleting");
    return;
  }

  loadTasks();
}

// ---------------- UPDATE ----------------

// OPEN EDIT PROMPT
function editTask(id, oldTitle, oldDesc) {
  const newTitle = prompt("Edit title:", oldTitle);
  if (!newTitle) return;

  const newDesc = prompt("Edit description:", oldDesc);

  updateTask(id, newTitle, newDesc);
}

// CALL UPDATE API
async function updateTask(id, title, description) {
  const res = await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ title, description })
  });

  if (!res.ok) {
    alert("Error updating task");
    return;
  }

  loadTasks();
}

// ---------------- AUTO LOAD ----------------
window.onload = function () {
  if (window.location.pathname.includes("dashboard.html")) {
    loadTasks();
  }
};