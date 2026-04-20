# 💬 Quick Chat App

A real-time chat application built with **React**, **Express.js**, **Socket.IO**, and **Redux**. This app allows users to communicate instantly with a clean UI and efficient state management.

## 🚀 Features

- 🔐 User Authentication (Login & Signup)
- 💬 Real-time messaging with Socket.IO
- 👥 User list & chat selection
- 🔎 Search users
- 🧑 Profile management
- ⚡ Global state management using Redux
- ⏳ Loader handling for async actions
- 🔒 Protected routes

## 🛠️ Tech Stack

### Frontend

- React (Vite)
- Redux Toolkit
- CSS

### Backend

- Express.js
- Socket.IO

## 📁 Folder Structure

```
Client/
├─ public/
│  ├─ images/
│  │  └─ quick-chat-app-background.jpg
│  ├─ favicon.svg
│  └─ icons.svg
│
├─ src/
│  ├─ api/                  # API request handlers
│  │  ├─ auth.js
│  │  ├─ chat.js
│  │  ├─ index.js
│  │  ├─ message.js
│  │  └─ user.js
│  │
│  ├─ assets/              # Static assets
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  │
│  ├─ components/          # Reusable components
│  │  ├─ Loader.jsx
│  │  └─ protectedRoute.jsx
│  │
│  ├─ pages/               # Application pages
│  │  ├─ home/
│  │  │  ├─ components/
│  │  │  │  ├─ Chat.jsx
│  │  │  │  ├─ Header.jsx
│  │  │  │  ├─ Search.jsx
│  │  │  │  ├─ Sidebar.jsx
│  │  │  │  └─ UserList.jsx
│  │  │  └─ HomePage.jsx
│  │  │
│  │  ├─ login/
│  │  │  └─ LoginPage.jsx
│  │  │
│  │  ├─ profile/
│  │  │  └─ ProfilePage.jsx
│  │  │
│  │  └─ signup/
│  │     └─ SingupPage.jsx
│  │
│  ├─ redux/               # Redux store and slices
│  │  ├─ loaderSlice.js
│  │  ├─ store.js
│  │  └─ userSlice.js
│  │
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
│
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package.json
├─ package-lock.json
├─ README.md
└─ vite.config.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Nayan-Krishna-Ball/Chat-application-client.git

```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the frontend

```bash
npm run dev
```

## 📌 Future Improvements

- ✅ Group chat support
- ✅ Message notifications
- ✅ Online/offline status

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.
