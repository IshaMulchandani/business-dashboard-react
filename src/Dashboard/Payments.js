import { React } from 'react'
import './Payments.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Payments(){

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
        const toggleDropdown = () => {
            setDropdownOpen(!dropdownOpen);
        };
    return(
        <div className="paymentsCont">
            <h1 className="mainH2">AgriCred</h1>
            <div className="navBar">
                            <ul>
                                <li><Link to="/dashboard">Home</Link></li>
                                <li id='dd' onClick={toggleDropdown}>
                                    Invoices on Us ▼
                                    {dropdownOpen && (
                                        <ul className="dropdown">
                                            <li><Link to={'/pending-invoices'}>Pending Invoices</Link></li>
                                            <li><Link to={'/payments'}>Upcoming Payments</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link to="/payment-history">Payment History</Link></li>
                                <li><Link to={'/invoices-by-us'}>Invoices by Us</Link></li>
                                <li><Link to="/credit-score">Credit Score</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
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