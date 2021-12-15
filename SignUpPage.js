// import { useState, useEffect } from "react";
// const SignUpPage = () => {
//   const [email, setEmail] = useState(""); // gets a value for what is inputed into each input below
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [conPassword, setConPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // page doesn't refresh when you put things in your inputs
//     const storage = { email, username, password, conPassword }; // This makes it so when you hit the submit button it takes all the values you had
//     localStorage.setItem("account", JSON.stringify(storage)); // saves blog into local storage
//   };
//   return (
//     <div className="signUpPage">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="text"
//           value={email} //this is to "save" what the value of email is
//           onChange={(e) => setEmail(e.target.value)} //this gets updated to what is inserted into email
//         />
//         <label>Username</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <label>Confirm Password</label>
//         <input
//           type="text"
//           value={conPassword}
//           onChange={(e) => setConPassword(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;
