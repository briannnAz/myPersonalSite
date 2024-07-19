import "./App.css";
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
