import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Portal } from "./pages/Portal";
import { AuthProvider } from "./context/AuthContext";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className=" text-black h-screen  text-black">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Portal />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
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
