import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Perfil } from "./pages/Perfil";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute> 
            }
          />
       
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
