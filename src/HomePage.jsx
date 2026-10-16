import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { setAccessToken } from "./apiClient";

function HomePage() {
  const { authentication, setAuthentication } = useContext(AuthContext);
  const navigate = useNavigate();

  function redirectToLoginPage() {
    navigate("/login");
  }

  function goToStudentListPage() {
    navigate("/students");
  }

  function handleLogout() {
    setAccessToken(null);
    setAuthentication(null);
    navigate("/login");
  }
  return (
    <>
      {authentication ? (
        <>
          <nav>
            {" | "}
            <Link to="/" style={{ color: "red" }}>
              Home
            </Link>
            {" | "}
            {authentication.role === "ROLE_STUDENT" ? (
              <>
                <Link to="/profileStudent">Student Profile</Link>
                {" | "}
              </>
            ) : null}
            <button onClick={handleLogout}>Logout</button>
          </nav>
          <div>
            <h1>
              Welcome to the Student Management System {authentication.username}
              !
            </h1>
            <br />
            <button onClick={goToStudentListPage}>View Student List</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>Not logged In! Please Click below to Login!</h2>
            <br />
            <button onClick={redirectToLoginPage}>Go To Login</button>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
