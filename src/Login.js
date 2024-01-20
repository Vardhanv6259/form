import React from "react";

const Login = () => {
  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <form>
        <div className="container">
          <h1>Login</h1>
          <div className="input-field">
            <input type="text" placeholder="Email" required />
            <i class="bx bx-envelope"></i>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" required />
            <i class="bx bx-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className="btn" value={Login}>
            Login
          </button>
          <div className="register-link">
            <p>Don't have an account?</p>
            <a href="#">Register</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
