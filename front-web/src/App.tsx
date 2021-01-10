import "./App.css";
import NavbarApp from "./templates/navbar/app-navbar";
import HomeApp from "./templates/home/app-home";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
