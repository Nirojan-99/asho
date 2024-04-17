// import logo from "./logo.svg";
// import Navigationbar from "./components/Navbar";
// import AddTask from "./components/AddTask";
// import Container from "./../node_modules/react-bootstrap/esm/Container";
// import { Row,Col } from "react-bootstrap";
// import TasksList from "./components/TasksList";
import "./App.css";
import Pages from "./Pages";
// import PageFAQ from "./PageFAQ"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Pages />
    </>
  );
}

export default App;
