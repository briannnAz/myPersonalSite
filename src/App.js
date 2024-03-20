import "./App.css";
import Home from "./pages/Home";
// import Header from './components/Header';
import Footer from "./components/Footer";
import { Row, Col } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import MePic from "./assets/meCasual.png";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    ></ThemeProvider>
  );
}

export default App;
