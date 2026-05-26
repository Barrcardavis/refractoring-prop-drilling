# Refactoring Prop Drilling to Context API

This project demonstrates refactoring a React application that originally relied on prop drilling to pass user data through multiple components. The updated version uses the React Context API to provide cleaner, more scalable state management.

This assignment is part of AD311 – Application Development.

## 📌 Project Overview
The original app passed a `user` object from:
App → Dashboard → Sidebar → UserProfile

Only UserProfile actually needed the data, but every component in the chain was forced to receive and pass it. This is known as prop drilling.

The refactored version replaces prop drilling with a UserContext Provider, allowing any component to access the shared user data directly using `useContext()`.

## 🛠️ Technologies Used
- React (Vite)
- React Context API
- JavaScript (ES6+)

## 📂 Project Structure
src/
├── App.jsx
├── UserContext.jsx
├── Dashboard.jsx
├── Sidebar.jsx
└── UserProfile.jsx

## 🔄 Before vs After Refactor
**Before:** props passed through every component  
**After:** Context Provider supplies data directly

## 🧪 Test Cases
| Test | Input | Expected Output |
|------|--------|----------------|
| 1 | `user.name = "David Davis"` | Displays “David Davis” |
| 2 | `user.email = "david@example.com"` | Displays correct email |
| 3 | `user.themePreference = "dark"` | Displays “Theme: dark” |
| 4 | `user.name = ""` | Blank name, no crash |
| 5 | `user.email = ""` | Blank email, no crash |
| 6 | `user.themePreference = undefined` | Blank theme, no crash |

## 🎥 Video Demonstration
Shows before/after refactor and all six test cases.

## 📘 Summary
This project successfully refactors a prop‑drilled React application into a cleaner, more maintainable structure using the Context API.
