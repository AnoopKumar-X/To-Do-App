# 📝 Drag & Drop To-Do App

A simple and interactive To-Do application with **Drag & Drop functionality** and **Local Storage support**.
Organize your tasks into different stages: **To Do**, **In Progress**, and **Done** 🚀

---

## ✨ Features

* ➕ Add new tasks with title & description
* 🖱️ Drag & drop tasks between columns
* 📊 Live task count for each column
* ❌ Delete tasks easily
* 💾 Saves tasks in browser using Local Storage
* 🔄 Tasks persist even after page refresh

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript (Vanilla JS)
* Browser Local Storage

---

## 📂 Project Structure

```
To-Do-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/AnoopKumar-X/To-Do-App.git
```

### 2️⃣ Open the project

```
cd To-Do-App
```

### 3️⃣ Run the app

* Open `index.html` in your browser

---

## 🎮 Usage

1. Click **Add Task**
2. Enter task title and description
3. Drag tasks between:

   * 📌 To Do
   * 🚧 In Progress
   * ✅ Done
4. Click **Delete** to remove tasks

---

## 🧠 How It Works

* Tasks are stored in an object and saved using:

```
localStorage.setItem("tasks", JSON.stringify(tasksData))
```

* Tasks are loaded on refresh:

```
showFromLocalStorage()
```

* Drag & Drop uses:

  * `dragstart`
  * `dragover`
  * `drop`

---

## 🔧 Future Improvements

* ✏️ Edit task feature
* ⏰ Add due dates
* 🌙 Dark mode
* ☁️ Backend integration
* 🔐 User authentication

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Anoop Kumar**
GitHub: https://github.com/AnoopKumar-X
