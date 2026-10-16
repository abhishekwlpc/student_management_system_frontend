import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import apiClient, { setAccessToken } from "./apiClient";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setAuthentication } = useContext(AuthContext);

  function setLoginCredentials(e) {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    const logindetails = {
      username: username.trim(),
      password: password,
    };

    try {
      setLoading(true);
      setErrorMessage("");
      const response = await apiClient.post("/api/v1/auth/login", logindetails);
      setAccessToken(response.data.accessToken);
      const authenticatedValues = {
        accessToken: response.data.accessToken,
        username: response.data.username,
        role: response.data.role,
        mustChangePassword: response.data.mustChangePassword,
      };

      setAuthentication(authenticatedValues);

      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid credentials or server error! Please Try again!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={setLoginCredentials}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={setLoginCredentials}
          />
          <br />
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        <div>
          <p>{errorMessage}</p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
