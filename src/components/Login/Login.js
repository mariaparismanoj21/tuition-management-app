import React from 'react';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username or Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <p>Forgot password?</p>
    </div>
  );
}

export default Login;