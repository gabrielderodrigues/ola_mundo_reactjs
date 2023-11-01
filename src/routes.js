import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Pages/Initial";
import AboutMe from "./Pages/AboutMe";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route 
          path="/" 
          element={<Initial />}
        />

        <Route 
          path="/about-me" 
          element={<AboutMe />}
        />

        <Route 
          path="*" element={<h1>Page Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
