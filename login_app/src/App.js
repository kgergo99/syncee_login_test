import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgetpwd" element={<LoginPage />} />
          
          <Route path="/home" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          
            
        </Routes>
      </UserAuthContextProvider> 
    </div>
  );
}

export default App;
