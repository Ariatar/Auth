import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import "./App.scss";

function App() {
   const adminUser = {
      password: "0662195934",
      email: "oleksiicherkashchenko@gmail.com",
   };

   const [user, setUser] = useState({ name: "", email: "" });
   const [error, setError] = useState("");
   const Login = (details) => {
      console.log(details);

      if (
         details.password == adminUser.password &&
         details.email == adminUser.email
      ) {
         console.log("Logged");
      } else {
         console.log("do not Match");
      }
   };

   const Logout = () => {
      console.log("Logout");
   };
   return (
      <div>
         {user.email != "" ? (
            <div className="welcome">
               <h2>
                  Welcome <span>{user.name}</span>
               </h2>
               <button>Logout</button>
            </div>
         ) : (
            <div>
               <LoginForm Login={Login} error={error} />
            </div>
         )}
      </div>
   );
}

export default App;
