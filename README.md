
#  TasksBoard – A Smart Task Management App

A **modern, responsive, and Firebase-powered task board application** built with **ReactJS**, designed to help users manage tasks across customizable lists. Featuring **real-time updates, secure authentication, persistent data, dynamic user profiles**, and **unit-tested components** — all deployed live for real-world usage.

### Live Project (depolyed link) : https://taskboard-omega.vercel.app/

### Project explanation Youtube video : 

---

##  Tech Stack & Architecture

| Technology                             | Purpose                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------- |
| **ReactJS**                            | Core frontend library to build a dynamic SPA (Single Page Application). |
| **React Router DOM**                   | Enables routing and guards `/dashboard` using protected routes.         |
| **Firebase Auth**                      | Manages login/signup and handles secure user authentication.            |
| **Firestore DB**                       | Stores task lists & tasks persistently per user via UID.                |
| **React Firebase Hooks**               | Simplifies auth state sync using `useAuthState`.                        |
| **Tailwind CSS**                       | Enables fast and responsive UI styling using utility-first classes.     |
| **Picsum.photos API**                  | Random dynamic profile image generation for each user session.          |
| **Jest + React Testing Library (RTL)** | Ensures UI component reliability through automated tests.               |
| **Vercel**                             | Production-ready deployment with fast CDN and CI/CD support.            |

---

##  Features Overview

###  Authentication

* Secure **Login/Signup** with Firebase Auth
* **ProtectedRoute** guards `/dashboard` from unauthorized access

###  Task Management

* Create/Delete multiple **task lists** (e.g., "Work", "Personal")
* **Add/Edit/Delete** tasks within each list
* **Mark tasks as completed**, auto-reorder for clean visuals
* **Persistent**: Tasks survive refresh or logout via Firestore

###  Dynamic Profile Identity

* Random profile image via [`picsum.photos`](https://picsum.photos/id/77/info)
* Each user gets a **unique avatar** on login, powered by external API

###  Modular Structure

* Split into **reusable components**: `TaskList`, `TaskCard`, `Header`, `TaskPopup`
* Centralized Firestore logic in `useTaskData()` hook for clean data flow

###  Testing with Jest + RTL

* Covered all critical components to ensure reliability and confidence
* ✅ **All tests passing** 

---

### 🧪 Test Coverage Summary

| Component   | Test Cases                              | Result   |
|-------------|-----------------------------------------|----------|
| **Header**  | 1. Renders brand elements<br>2. Displays profile image when provided<br>3. Shows loading state | ✅ Passed |
| **TaskPopup** | 1. Form element rendering<br>2. Task text input handling<br>3. Add task submission | ✅ Passed |
| **TaskCard** | 1. Completion toggle functionality<br>2. Delete task handling<br>3. Date display formatting | ✅ Passed |

**🖼️ Screenshot of passing tests:**
![Tests Passing](https://github.com/user-attachments/assets/6bd53cad-ded4-41e4-b24e-29f8c8e452b9)

Test File' used in project:

ProtectedRoute.test.jsx - Auth redirection tests

TaskList.test.jsx - List manipulation tests

FirebaseHooks.test.js - Data fetching tests

---

##  Responsive Design

* Built mobile-first using Tailwind CSS
* Fully responsive layout optimized for **mobile, tablet, and desktop**
* Task lists use horizontal scrolling on smaller screens for UX clarity

---

## 🌐 Live Demo

🟢 **Deployed on Vercel** → [https://your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)

---

## 🔍 How It Works – Behind the Scenes

### 1.  User Authentication (Firebase Auth)

* On login/signup, Firebase creates a **unique UID** for the user.
* This UID ensures **each user’s data is isolated and secure**.

### 2.  Firestore Data Storage (Per User)

* On first login, Firestore creates a document tied to the user's UID.
* **All task lists and their tasks are stored in this document**.
* State is **persistent** across refreshes and logouts.

### 3. useTaskData() – Custom React Hook

* Centralizes all Firestore logic:

  * Fetching task data on mount
  * Updating tasks/lists
  * Syncing with UI in real-time
* This **decouples business logic from UI**, making components clean and scalable.

### 4.  Dynamic Profile Avatar

* A random number (0–999) is generated on dashboard mount.
* This number is passed to [`picsum.photos`](https://picsum.photos) to fetch a **unique profile picture**.
* Image is stored in state and shown in the header for a personalized UX.

### 5.  Protected Routing

* The `<ProtectedRoute>` component uses `useAuthState` to:

  * Detect if a user is logged in
  * Redirect unauthenticated users to `/`
  * Ensures **data is never exposed to unauthorized users**.

### 6.  Real-Time UX

* All task actions (add/delete/mark complete) **immediately update Firestore**.
* The UI reflects changes in real time, providing a smooth and engaging experience.

---

## 📂 Project Structure Highlights

```bash
src/
├── components/
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── dashboard/
│       ├── Header.jsx
│       ├── TaskList.jsx
│       ├── TaskPopup.jsx
│       └── TaskCard.jsx
├── hooks/
│   └── useTaskData.js
├── routes/
│   └── ProtectedRoute.jsx
├── App.jsx
├── firebase.js
└── main.jsx
```

---

## 🧪 Run Tests Locally

```bash
# Install testing tools
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jsdom

# Add setup file for jest-dom
touch setupTests.js
```

**setupTests.js**:

```js
import '@testing-library/jest-dom';
```

Add this to `vite.config.js` or `package.json` to ensure setup file is used.

Run tests:

```bash
npx vitest run
```

