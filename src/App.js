import React, { useState } from "react";
import Odds from "../src/components/Odds";
import "../src/App.scss";
import LoginForm from "./components/LoginForm";

function App() {
   const adminUser = {
      email: "oleksy@gmail.com",
      password: "1111",
   };
   const [user, setUser] = useState({ email: "", name: "" });
   const [error, setError] = useState("");

   const Login = (details) => {
      console.log(details);
      if (
         details.email === adminUser.email ||
         details.password === adminUser.password
      ) {
         setUser({
            name: details.name,
            email: details.email,
         });
         console.log("logged in");
      } else {
         console.log("details do not match");
      }
   };

   const logout = () => {
      console.log(logout);
   };
   return (
      <div className="App">
         <div>
            {user.email !== "" ? (
               <div className="Welcome">
                  Welcome <h1>{user.name}</h1>
                  <Odds />
               </div>
            ) : (
               <LoginForm Login={Login} error={error} />
            )}
         </div>
      </div>
   );
}

export default App;
