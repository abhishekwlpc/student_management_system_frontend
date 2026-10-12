import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteStudentPage.css";

function DeleteStudentPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorFetchingStudents, setErrorFetchingStudents] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/v1/students",
        );
        setStudents(response.data);
      } catch (error) {
        setErrorFetchingStudents(error);
        console.log("Error: ", errorFetchingStudents);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  async function handleDelete(id) {
    const userComfirmed = window.confirm(
      "Are you sure to delete this student?",
    );

    if (userComfirmed) {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/student/${id}`,
      );
      navigate("/students");
    }
  }

  return (
    <>
      <h3>Students List</h3>

      {loading ? (
        <h4>Loading...</h4>
      ) : errorFetchingStudents === null ? (
        students.length > 0 ? (
          <div>
            <table className="student-table-with-edit">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Registration Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Guardian Name</th>
                  <th>Guardian Relationship</th>
                  <th>Guardian Telephone</th>
                  <th>Delete Student</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.username}</td>
                    <td>{student.email}</td>
                    <td>{student.registrationNumber}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.birthDate}</td>
                    <td>{student.address}</td>
                    <td>{student.guardianName}</td>
                    <td>{student.guardianRelationship}</td>
                    <td>{student.guardianTelephone}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(student.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h4>No students to show here!</h4>
        )
      ) : (
        <h3>Failed to load students!</h3>
      )}
    </>
  );
}

export default DeleteStudentPage;
