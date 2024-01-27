
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import MyForm from './components/MyForm/MyForm';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import Result from './components/Resultpage/Result';
import Election from './components/Election/App';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/Election" element={<Election/>} />
        <Route path="/MyForm" element={<MyForm/>} />
        <Route path="/Result" element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;

