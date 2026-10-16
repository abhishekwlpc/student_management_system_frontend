import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "./apiClient";

function StudentProfilePage() {
  const [loading, setLoading] = useState(false);
  const [errorFetchingStudentDetails, setErrorFetchingStudentDetails] =
    useState("");
  const [studentOwnData, setStudentOwnData] = useState({
    username: "",
    email: "",
    registrationNumber: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    guardianName: "",
    guardianRelationship: "",
    guardianTelephone: "",
  });

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        setLoading(true);
        setErrorFetchingStudentDetails("");
        const response = await apiClient.get("/api/v1/student/me");
        setStudentOwnData(response.data);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || error.message || "An error occurred";
        setErrorFetchingStudentDetails(errorMessage);
        console.log("Error: ", errorFetchingStudentDetails);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentDetails();
  }, []);

  return (
    <>
      <nav>
        {" | "}
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/profileStudent" style={{ color: "red" }}>
          Profile
        </Link>
        {" | "}
      </nav>
      <div>
        <h1>Profile Details</h1>
        {loading ? (
          <h3>Loading</h3>
        ) : (
          <>
            {errorFetchingStudentDetails === "" ? (
              <div>
                <label>Username: </label>
                <h4>{studentOwnData.username}</h4>
                <br />
                <label>Email: </label>
                <h4>{studentOwnData.email}</h4>
                <br />
                <label>Registration Number: </label>
                <h4>{studentOwnData.registrationNumber}</h4>
                <br />
                <label>First Name: </label>
                <h4>{studentOwnData.firstName}</h4>
                <br />
                <label>Last Name: </label>
                <h4>{studentOwnData.lastName}</h4>
                <br />
                <label>Birth Date: </label>
                <h4>{studentOwnData.birthDate}</h4>
                <br />
                <label>Address: </label>
                <h4>{studentOwnData.address}</h4>
                <br />
                <label>Guardian Name: </label>
                <h4>{studentOwnData.guardianName}</h4>
                <br />
                <label>Guardian Relationship: </label>
                <h4>{studentOwnData.guardianRelationship}</h4>
                <br />
                <label>Guardian Telephone: </label>
                <h4>{studentOwnData.guardianTelephone}</h4>
                <br />
              </div>
            ) : (
              <h3>Error loading Profile Details!</h3>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default StudentProfilePage;
