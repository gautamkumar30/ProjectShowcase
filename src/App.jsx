import { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/_root/HomePage/HomePage";
import { AuthContext } from "./context/AuthContext";
import UploadProject from "./pages/_root/UploadProject/UploadProject";
import Search from "./pages/_root/Search/Search";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children; 
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <main> */}
      <Routes>
        <Route path="/home" />
        <Route
          path="/home"
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/upload" element={<UploadProject />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
};

export default App;
