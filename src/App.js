// import logo from './logo.svg';
import './App.css';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './pages/Main';
// import GetInTouch from './pages/GetInTouch';


function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route exact path="/contact" element={<GetInTouch />} /> */}
          {/* <Route exact path="/services" element={<Services />} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
