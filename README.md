TasksBoard – A Smart Task Management App

A responsive, dynamic, and Firebase-backed task board application built with ReactJS that allows users to manage tasks across multiple lists with persistent data and dynamic UI personalization.

 Tech Stack & Architecture
Technology	:Purpose in the project
ReactJS	: Core frontend library for building the UI.
React Router DOM :	Enables routing and protected routes (/dashboard only for logged-in users).
Firebase Auth	: Handles user authentication (Login & Signup).
Firestore DB	:Stores each user’s unique task lists and tasks persistently.
React Firebase Hooks : Simplifies auth state management and integration with Firebase.
Picsum.photos API	: Generates a random profile image per user from 1000+ dynamic sources.
Tailwind CSS : Rapid styling and mobile responsiveness with utility classes.
Jest + React Testing Library :	Unit testing of UI components to ensure reliability.
Vercel :	Hosted and deployed the application for real-world access.

Features
=> Authentication

Login / Signup using Firebase Auth

Protected Dashboard accessible only to logged-in users

=> Task Management

Add, edit, delete, and mark tasks as complete

Create multiple task lists like “Work”, “Personal”, etc.

Persistent state: Your tasks remain even after refreshing or logging out

=> Dynamic Profile Image

Each user gets a unique profile image via https://picsum.photos/id/<0–999>/info

=> Modular Structure

Components split logically (e.g., TaskList, TaskCard, Header, TaskPopup) for better maintainability

Custom hooks like useTaskData() encapsulate Firestore logic

=> Testing

Critical components like TaskPopup, TaskCard, and ProtectedRoute tested using Jest + RTL

✅ All test cases pass

See screenshot below 👇

![{4F1DFE7F-87B8-4F42-B958-57C953597127}](https://github.com/user-attachments/assets/6bd53cad-ded4-41e4-b24e-29f8c8e452b9)
 Test Coverage Highlights:
Component	                      Test Description	                         Result
TaskPopup	       Renders correctly, inputs update state, add button works	 ✅ Passed
TaskCard	       Toggles task completion, delete works	                   ✅ Passed
ProtectedRoute  	Redirects unauthenticated user to login	                 ✅ Passed


📱 Responsive Design

Mobile-first UI with Tailwind CSS

Fully responsive task board layout across screen sizes

Live Demo
🟢 https://your-vercel-link.vercel.app

How It Works – Behind the Scenes
Let’s walk through the logic that powers the TasksBoard experience from login to task management:

1. User Authentication with Firebase
When a user signs up or logs in, we use Firebase Authentication.

Firebase generates a unique user ID (uid) for each user.

This uid is used to securely identify and isolate each user's data in the Firestore database.

2. User-Specific Data Storage in Firestore
Once logged in, the app checks if the Firestore has any task lists for the current user.

If not, it creates a new document in Firestore with the uid as the key.

All task lists and tasks are saved under this user-specific document, making the data persistent across sessions.

3. Custom Hook: useTaskData()
This custom React Hook encapsulates all logic related to Firestore:

Fetching tasks when the dashboard loads.

Updating Firestore when a task is added, updated, or deleted.

Ensuring the UI stays in sync with the backend in real-time.

It abstracts the complexity, so the component using it stays clean and readable.

4. Dynamic Profile Image
When the user logs in, we use the https://picsum.photos/id/<random>/info API.

A random number (0–999) is generated, and a unique profile image is fetched.

This image is stored in state and shown in the header, giving each user a visually distinct identity.

5. Protected Routing
We use a ProtectedRoute component to guard the Dashboard route.

Only authenticated users can access /dashboard.

If someone tries to access it without logging in, they’re redirected back to the login page.

This ensures both security and a smooth user experience.

Real-time UX
Changes like marking a task as completed, adding/deleting tasks or lists are immediately reflected in the UI.

Thanks to React state + Firestore updates, everything feels fast and interactive!
