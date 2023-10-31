import AboutMe from "./Pages/AboutMe";
import Initial from "./Pages/Initial";

const page = window.location.pathname === '/' ? <Initial /> : <AboutMe />;

function App() {
  return page;
}

export default App;
