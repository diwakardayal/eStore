import react from "react";
import "./Register.css";

const Register = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="formSec">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="username" />
          </div>

          <div className="formSec">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email" />
          </div>
          <div className="formSec">
            <label htmlFor="password">Password</label>
            <input type="pass" id="password" placeholder="password" />
          </div>
          {/* <div className="formSec">
            <label htmlFor="password">Confirm Password</label>
            <input type="pass" id="password" placeholder="confirm password" />
          </div> */}
          <button type="submit">Register</button>
        </form>
        <hr />

        <button>Login</button>
      </div>
    </div>
  );
};

export default Register;
