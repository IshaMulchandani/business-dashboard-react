import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BasicDetails from './Registration/BasicDetails';
import Contact from './Registration/Contact';
import Agreement from './Registration/Agreement';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<BasicDetails />} />
        <Route path='/contactDetails' element={<Contact/>}/>
        <Route path='/agreement&verification' element={<Agreement/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App;
