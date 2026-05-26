Refactoring Prop Drilling to Context API
This project demonstrates refactoring a React application that originally relied on prop drilling to pass user data through multiple components. The updated version uses the React Context API to provide cleaner, more scalable state management.

This assignment is part of AD311 – Application Development.

📌 Project Overview
The original app passed a user object from:

<img width="487" height="108" alt="image" src="https://github.com/user-attachments/assets/8ec1d3a1-b91e-49e4-9615-ea7c08046b23" />

Only UserProfile actually needed the data, but every component in the chain was forced to receive and pass it. This is known as prop drilling.

The refactored version replaces prop drilling with a UserContext Provider, allowing any component to access the shared user data directly using useContext().

🛠️ Technologies Used
React (Vite)

React Context API

JavaScript (ES6+)

📂 Project Structure

<img width="485" height="203" alt="image" src="https://github.com/user-attachments/assets/d42352b5-1a1d-41b0-80b7-6db445dc8684" />

🔄 Before vs After Refactor
Before (Prop Drilling)
App created the user object.

Passed it to Dashboard.

Dashboard passed it to Sidebar.

Sidebar passed it to UserProfile.

After (Context API)
UserProvider stores the user data.

App wraps the app in <UserProvider>.

UserProfile reads the data directly using useUser().

No props passed through Dashboard or Sidebar.

🧪 Test Cases
Normal Test Cases

<img width="569" height="164" alt="image" src="https://github.com/user-attachments/assets/3b323f33-cf0a-41b1-bb16-2270623d0101" />

Edge Test Cases

<img width="567" height="224" alt="image" src="https://github.com/user-attachments/assets/0796d271-5b2e-47fe-92ed-128ed0d9eca4" />

These test cases confirm that the refactor did not break functionality and that the UI handles missing data safely.

🎥 Video Demonstration
The video walkthrough includes:

Running the app before refactoring

Running the app after refactoring

Demonstrating all 6 test cases

Showing how Context removes the need for prop drilling

📘 Summary
This project successfully refactors a prop‑drilled React application into a cleaner, more maintainable structure using the Context API. The refactor eliminates unnecessary props, reduces component coupling, and improves scalability for future features.
