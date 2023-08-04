import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage.js";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgetpwd" element={<LoginPage />} />

        </Routes>
      </UserAuthContextProvider> 
    </div>
  );
}

export default App;
