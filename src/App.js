import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BasicDetails from './Registration/BasicDetails';
import Contact from './Registration/Contact';
import Agreement from './Registration/Agreement';
import Dashboard from './Dashboard/Dashboard';
import PendingInvoices from './Dashboard/PendingInvoices';
import PaymentGateway from './Dashboard/PaymentGateway';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<BasicDetails />} />
        <Route path='/contactDetails' element={<Contact/>}/>
        <Route path='/agreement&verification' element={<Agreement/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/pending-invoices' element={<PendingInvoices/>}/>
        <Route path='/payment-gateway' element={<PaymentGateway/>} />
      </Routes>
    </Router>
  )
}

export default App;
