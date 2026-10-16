import { Route, Routes } from "react-router-dom";
import CreateStudentPage from "./CreateStudentPage";
import StudentListPage from "./StudentListPage";
import EditStudentPageList from "./EditStudentPageList";
import EditStudentPage from "./EditStudentPage";
import DeleteStudentPage from "./DeleteStudentPage";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import StudentProfilePage from "./StudentProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <CreateStudentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profileStudent"
          element={
            <ProtectedRoute>
              <StudentProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectedRoute>
              <EditStudentPageList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editStudent"
          element={
            <ProtectedRoute>
              <EditStudentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deleteStudent"
          element={
            <ProtectedRoute>
              <DeleteStudentPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
