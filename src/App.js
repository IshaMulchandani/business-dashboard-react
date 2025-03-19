import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BasicDetails from './Registration/BasicDetails';
import Contact from './Registration/Contact';
import Agreement from './Registration/Agreement';
import Dashboard from './Dashboard/Dashboard';
import PendingInvoices from './Dashboard/PendingInvoices';
import PaymentGateway from './Dashboard/PaymentGateway';
import Payments from './Dashboard/Payments';
import PaymentHistory from './Dashboard/PaymentHistory'
import CreditScore from './Dashboard/CreditScore';
import Settings from './Dashboard/Settings';
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
        <Route path='/payments' element={<Payments/>} ></Route>
        <Route path='/payment-history' element={<PaymentHistory/>} />
        <Route path='/credit-score' element={<CreditScore/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </Router>
  )
}

export default App;
