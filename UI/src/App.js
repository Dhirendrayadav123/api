
import './App.css';
import Add from './Add';
import Update from './Update';
import Top from './Top'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div>
        <Top/>
      </div>
      <Routes>
        <Route exact path="/" element={<Add/>}/>
        <Route exact path="/update" element={ <Update/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
