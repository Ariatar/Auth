import React, { useState } from "react";

const LoginForm = ({ Login, error }) => {
   const [details, setDetails] = useState({
      name: "",
      email: "",
      password: "",
   });
   const submitHandler = (e) => {
      e.preventDefault();

      Login(details);
   };
   return (
      <div>
         {" "}
         <h1 className="loginTitle">Choose a Login Method</h1>
         <form action="" onSubmit={submitHandler}>
            <div className="login">
               <div className="wrapper">
                  <div className="left">
                     <div className="loginButton google">
                        <img src="" alt="" className="icon" />
                        Google
                     </div>
                     <div className="loginButton facebook">
                        <img src="" alt="" className="icon" />
                        Facebook
                     </div>
                     <div className="loginButton github">
                        <img src="" alt="" className="icon" />
                        Github
                     </div>
                  </div>
                  <div className="center">
                     <div className="line" />
                     <div className="or">OR</div>
                  </div>
                  <div className="right">
                     <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) =>
                           setDetails({ ...details, name: e.target.value })
                        }
                        value={details.name}
                     />
                     <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                           setDetails({ ...details, email: e.target.value })
                        }
                        value={details.email}
                     />
                     <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                           setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}
                     />
                     <button className="submit">Login</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default LoginForm;
