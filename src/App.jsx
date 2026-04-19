import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/protectedRoute";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import SignupPage from "./pages/signup/SingupPage";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {loader && <Loader />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {" "}
                <HomePage />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                {" "}
                <ProfilePage />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
