import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BasicDetails from './BasicDetails';
import Contact from './Contact';
import Agreement from './Agreement';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<BasicDetails />} />
        <Route path='/contactDetails' element={<Contact/>}/>
        <Route path='/agreement&verification' element={<Agreement/>}/>
        <Route path='/dasboard' />
      </Routes>
    </Router>
  )
}

export default App;
