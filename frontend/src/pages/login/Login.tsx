import react from "react";
import "./Login.css";
import { LoginApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function onSubmit(e: any) {
    e.preventDefault();

    const { email, password } = e.target;

    LoginApi({ email: email.value, password: password.value }).then((res) => {
      console.log(res);

      sessionStorage.setItem("Token", res.token);
      navigate("/");
    });

    console.log(email.value, password.value);

    console.log(e);
  }
  return (
    <>
      <div className="Login">
        <div className="formcenter">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <div className="loginSec">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email" />
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
