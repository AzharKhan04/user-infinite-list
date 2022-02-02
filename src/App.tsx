import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import AuthService from "./Services/auth.service";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const getAuth = () => {

  const authService:AuthService = new AuthService();
  return authService.isAuthenticated();
};

const ProtectedRoute: React.FunctionComponent<any> = ({ children }) => {

    const  authenticated  = getAuth();
    return authenticated === true
      ? children
      : <Navigate to="/login" replace />;
}

const App : React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.privateRoutes.map((route: any) => {
            return <Route key ={route.path} path={route.path} element={<ProtectedRoute>{route.component}</ProtectedRoute>
        } />;
          })
        }
        {routes.publicRoutes.map((route: any) => {
          return <Route key ={route.path} path={route.path} element={route.component} />;
        })}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
