import NavBar from "./components/NavBar";
 
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
