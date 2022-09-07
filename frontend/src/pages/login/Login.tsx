import react from "react";
import "./Login.css";

const Login = () => {
  function onSubmit(e: any) {
    e.preventDefault();

    console.log(e);
  }
  return (
    <>
      <div className="Login">
        <div className="formcenter">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <div className="loginSec">
              <label htmlFor="username">Username</label>
              <input type="username" id="username" placeholder="username" />
            </div>

            <div className="loginSec">
              <label htmlFor="password">Password</label>
              <input type="pass" id="password" placeholder="password" />
            </div>

            <div className="loginSec">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
