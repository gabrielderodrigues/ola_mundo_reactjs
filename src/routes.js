import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./pages/Initial";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route 
            path="/" 
            element={<Initial />}
          />

          <Route 
            path="/about-me" 
            element={<AboutMe />}
          />
        </Route>

        <Route 
          path="*" element={<h1>Page Not Found</h1>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
