
import './App.css';
import Home from './pages/Home';
// import Header from './components/Header';
import Footer from './components/Footer';
import { Row, Col } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import MePic from './assets/MeAdventureTimeFinal.png';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs">
    <div className="App">
      {/* <Header /> */}
      <header className="App-header">
        <div id="headerText">
          <Row id="welcomeText">
            <Col className="titleItems" lg="6" sm="12">
              <p>Hello!</p>
              <p>I'm Brian.</p>
            </Col>
            <Col className="titleItems" lg="6" sm="12">
              <img alt="cartoon me" src={MePic} height='450px' />
            </Col>
            
          </Row>

          <h1 className="mainText">I'm a <strong>designer</strong>. I'm a <strong>developer</strong>. I'm a <strong>creator</strong>.</h1>
        </div>
        <div className="homeContainer">
          <Home />
        </div>
      </header>
      <body>
        
      </body>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
