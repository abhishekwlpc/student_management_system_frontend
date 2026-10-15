import { useContext } from "react";
import AuthContext from "./context/AuthContext";

function HomePage() {
  const { authentication, setAuthentication } = useContext(AuthContext);
  return (
    <>
      {authentication && (
        <h1>
          Welcome to te Student Management System {authentication.username}!
        </h1>
      )}
    </>
  );
}

export default HomePage;
