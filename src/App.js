import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = function () {
//   const [users, setUsers] = useState(null);

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     axios
//       .get("/api/users")
//       .then((users) => setUsers(users))
//       .catch((err) => console.log(err));
//   }, []);

//   function submitForm() {
//     if (username === "") {
//       alert("Please fill the username field");
//       return;
//     }
//     if (email === "") {
//       alert("Please fill the email field");
//       return;
//     }
//     axios
//       .post("/api/users", {
//         username: username,
//         email: email,
//       })
//       .then(function () {
//         alert("Account created successfully");
//         window.location.reload();
//       })
//       .catch(function () {
//         alert("Could not creat account. Please try again");
//       });
//   }
//   return (
//     <>
//       <h1>My Project</h1>
//       {users === null ? (
//         <p>Loading...</p>
//       ) : users.length === 0 ? (
//         <p>No user available</p>
//       ) : (
//         <>
//           <h2>Available Users</h2>
//           <ol>
//             {users.map((user, index) => (
//               <li key={index}>
//                 Name: {user.name} - Email: {user.email}
//               </li>
//             ))}
//           </ol>
//         </>
//       )}

//       <form onSubmit={submitForm}>
//         <input
//           onChange={(e) => setUsername(e.target.value)}
//           type="text"
//           placeholder="Enter your username"
//         />
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           type="text"
//           placeholder="Enter your email address"
//         />
//         <input type="submit" />
//       </form>
//     </>
//   );
// };
// export default App;
