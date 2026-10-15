import { Route, Routes } from "react-router-dom";
import CreateStudentPage from "./CreateStudentPage";
import StudentListPage from "./StudentListPage";
import EditStudentPageList from "./EditStudentPageList";
import EditStudentPage from "./EditStudentPage";
import DeleteStudentPage from "./DeleteStudentPage";
import LoginPage from "./LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./HomePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<CreateStudentPage />} />
        <Route path="/students" element={<StudentListPage />} />
        <Route path="/edit" element={<EditStudentPageList />} />
        <Route path="/editStudent" element={<EditStudentPage />} />
        <Route path="/deleteStudent" element={<DeleteStudentPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
