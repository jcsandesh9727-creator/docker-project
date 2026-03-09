import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (isRegister) {
      const res = await register(name, email, password);
      if (res.status) {
       
        setIsRegister(false);
        setName("");
        setPassword("");
        setError("Registration successful, please log in.");
      } else {
        setError(res.message || "registration failed");
      }
    } else {
      const result = await login(email, password);
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.message || "login failed");
      }
    }
  };

  const toggleMode = () => {
    setIsRegister((prev) => !prev);
    setError(null);
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>

      {error && <p className="error-msg">{error}</p>}

      <form className="login-form" onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <button className="toggle-btn" onClick={toggleMode}>
        {isRegister ? "Already have an account? Log in" : "New user? Register"}
      </button>
    </div>
  );
};

export default Login;