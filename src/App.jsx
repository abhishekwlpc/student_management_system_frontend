import { Route, Routes } from "react-router-dom";
import CreateStudentPage from "./CreateStudentPage";
import StudentListPage from "./StudentListPage";
import EditStudentPageList from "./EditStudentPageList";
import EditStudentPage from "./EditStudentPage";
import DeleteStudentPage from "./DeleteStudentPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to te Student Management System!</h1>}
        />
        <Route path="/add" element={<CreateStudentPage />} />
        <Route path="/students" element={<StudentListPage />} />
        <Route path="/edit" element={<EditStudentPageList />} />
        <Route path="/editStudent" element={<EditStudentPage />} />
        <Route path="/deleteStudent" element={<DeleteStudentPage />} />
      </Routes>
    </>
  );
}

export default App;
