import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
