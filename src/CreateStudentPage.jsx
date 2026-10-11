import { useState } from "react";
import axios from "axios";
import "./CreateStudentPage.css";

function CreateStudentPage() {
  const [studentData, setStudentData] = useState({
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
  const [studentCreatedStatus, setStudentCreatedStatus] = useState(false);

  function createNewStudent(e) {
    const { name, value } = e.target;

    setStudentData((student) => ({
      ...student,
      [name]: value,
    }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!studentData.username.trim() || !studentData.email.trim()) {
      alert("Username and Email required!");
      return;
    }

    if (!studentData.registrationNumber.trim()) {
      alert("Registration Number is required!");
      return;
    }

    if (!studentData.firstName.trim() || !studentData.lastName.trim()) {
      alert("First and Last names required!");
      return;
    }

    if (!studentData.birthDate) {
      alert("Date of Birth required!");
      return;
    }

    if (!studentData.address.trim()) {
      alert("Address required!");
      return;
    }

    const newStudentDetails = {
      username: studentData.username.trim(),
      email: studentData.email.trim(),
      registrationNumber: studentData.registrationNumber.trim(),
      firstName: studentData.firstName.trim(),
      lastName: studentData.lastName.trim(),
      birthDate: studentData.birthDate,
      address: studentData.address.trim(),
      guardianName: studentData.guardianName.trim(),
      guardianRelationship: studentData.guardianRelationship.trim(),
      guardianTelephone: studentData.guardianTelephone.trim(),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/student",
        newStudentDetails,
      );
      setStudentCreatedStatus(true);
    } catch (error) {
      console.log("Error updating data: ", error);
      setStudentCreatedStatus(false);
    }

    // setStudentData({
    //   username: "",
    //   email: "",
    //   registrationNumber: "",
    //   firstName: "",
    //   lastName: "",
    //   birthDate: "",
    //   address: "",
    //   guardianName: "",
    //   guardianRelationship: "",
    //   guardianTelephone: "",
    // });
  }

  return (
    <>
      <h3>Add a student</h3>
      <div className="student-form">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={studentData.username}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={studentData.email}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="registrationNumber">Registration Number: </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={studentData.registrationNumber}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={studentData.firstName}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={studentData.lastName}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="birthDate">Date of Birth: </label>
          <input
            type="Date"
            id="birthDate"
            name="birthDate"
            value={studentData.birthDate}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={studentData.address}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="guardianName">Guardian Name: </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={studentData.guardianName}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="guardianRelationship">Guardian Relationship: </label>
          <input
            type="text"
            id="guardianRelationship"
            name="guardianRelationship"
            value={studentData.guardianRelationship}
            onChange={createNewStudent}
          />
          <br />
          <label htmlFor="guardianTelephone">Guardian Telephone: </label>
          <input
            type="text"
            id="guardianTelephone"
            name="guardianTelephone"
            value={studentData.guardianTelephone}
            onChange={createNewStudent}
          />
          <br />

          <button type="submit">Add Student</button>
        </form>
      </div>
    </>
  );
}

export default CreateStudentPage;
