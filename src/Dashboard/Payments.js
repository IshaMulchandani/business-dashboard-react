import { React } from 'react'
import './Payments.css'
import { Link } from 'react-router-dom'

export default function Payments(){
    return(
        <div className="paymentsCont">
            <h1 className="mainH2">AgriCred</h1>
            <div className="navBar">
                <ul>
                    <Link to={'/dashboard'}><li>Home</li></Link>
                    <Link to={'/pending-invoices'}><li>Pending Invoices</li></Link>
                    <Link to={'/payments'}><li>Upcoming Payments</li></Link>
                    <Link to={'/payment-history'} ><li>Payment History</li></Link>
                    <Link to={'/credit-score'} ><li>Credit Score</li></Link>
                    <Link to={'/settings'}><li>Settings</li></Link>
                </ul>
            </div>
            <div className="summary">
                <h2 className="mainH2">Upcoming Payments</h2>
                <h3 className='basic-margin'>Payment List</h3>
                <div className="upcomPayments">
                    <div className="payment" id="payment1">
                        <p>INV #123</p>
                        <p>Anjali Co.</p>
                        <p>&#8377;50,000</p>
                        <p>Due in 3 days</p>
                        <button>Set Autopay</button>
                        <button>Schedule Reminder</button>
                        <button>View Payment Plan</button>
                    </div><br /><br />
                    <div className="payment" id="payment2">
                        <p>INV #789</p>
                        <p>Rohan Co.</p>
                        <p>&#8377;46,750</p>
                        <p>Due in 6 days</p>
                        <button>Set Autopay</button>
                        <button>Schedule Reminder</button>
                        <button>View Payment Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}