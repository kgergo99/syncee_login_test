import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <LoginPage /> 
      </UserAuthContextProvider> 
    </div>
  );
}

export default App;
