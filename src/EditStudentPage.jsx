import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudentPage() {
  const [selectedStudentData, setSelectedStudentData] = useState({
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
  const location = useLocation();
  const studentId = location.state?.studentId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelectedStudent = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/student/${studentId}`,
      );
      console.log("came here!");
      console.log(response.data);
      setSelectedStudentData(response.data);
    };

    fetchSelectedStudent();
  }, []);

  const handleLoad = (e) => {
    const { name, value } = e.target;
    setSelectedStudentData((perv) => ({
      ...perv,
      [name]: value,
    }));
  };

  async function submitEditedStudent(e) {
    e.preventDefault();

    if (
      !selectedStudentData.username.trim() ||
      !selectedStudentData.email.trim()
    ) {
      alert("Username and Email required!");
      return;
    }

    if (!selectedStudentData.registrationNumber.trim()) {
      alert("Registration Number is required!");
      return;
    }

    if (
      !selectedStudentData.firstName.trim() ||
      !selectedStudentData.lastName.trim()
    ) {
      alert("First and Last names required!");
      return;
    }

    if (!selectedStudentData.birthDate) {
      alert("Date of Birth required!");
      return;
    }

    if (!selectedStudentData.address.trim()) {
      alert("Address required!");
      return;
    }

    const newEditedStudentDetails = {
      username: selectedStudentData.username.trim(),
      email: selectedStudentData.email.trim(),
      registrationNumber: selectedStudentData.registrationNumber.trim(),
      firstName: selectedStudentData.firstName.trim(),
      lastName: selectedStudentData.lastName.trim(),
      birthDate: selectedStudentData.birthDate,
      address: selectedStudentData.address.trim(),
      guardianName: selectedStudentData.guardianName.trim(),
      guardianRelationship: selectedStudentData.guardianRelationship.trim(),
      guardianTelephone: selectedStudentData.guardianTelephone.trim(),
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/student/${studentId}`,
        newEditedStudentDetails,
      );

      alert("Student Edited Successfully!");
      navigate("/edit");
    } catch (error) {
      console.log("Error updating data: ", error);
      alert("Student Edition Failed, Try again!");
    }
  }

  return (
    <>
      <h3>Edit a student</h3>
      <div className="student-form-edit-version">
        <form onSubmit={submitEditedStudent}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={selectedStudentData.username}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={selectedStudentData.email}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="registrationNumber">Registration Number: </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={selectedStudentData.registrationNumber}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={selectedStudentData.firstName}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={selectedStudentData.lastName}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="birthDate">Date of Birth: </label>
          <input
            type="Date"
            id="birthDate"
            name="birthDate"
            value={selectedStudentData.birthDate}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={selectedStudentData.address}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="guardianName">Guardian Name: </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={selectedStudentData.guardianName}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="guardianRelationship">Guardian Relationship: </label>
          <input
            type="text"
            id="guardianRelationship"
            name="guardianRelationship"
            value={selectedStudentData.guardianRelationship}
            onChange={handleLoad}
          />
          <br />
          <label htmlFor="guardianTelephone">Guardian Telephone: </label>
          <input
            type="text"
            id="guardianTelephone"
            name="guardianTelephone"
            value={selectedStudentData.guardianTelephone}
            onChange={handleLoad}
          />
          <br />

          <button type="submit">Edit Student</button>
        </form>
      </div>
    </>
  );
}

export default EditStudentPage;
