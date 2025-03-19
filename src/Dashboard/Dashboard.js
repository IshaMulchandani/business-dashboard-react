import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="dashboardCont">
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
                <h2 className="mainH2">Business Dashboard</h2>
                <div className="actions">
                    <div className="action" id="action1">
                        <div className="actionSec1">
                            <h3>Pending invoices</h3>
                            <p>&#8377;46,00,000</p>
                        </div>
                        <div className="actionSec2">
                            <Link to={'/pending-invoices'}><button>See Details</button></Link>
                        </div>
                    </div>
                    <div className="action" id="action2">
                        <div className="actionSec1">
                            <h3>Upcoming Due Payments (Next 7 days)</h3>
                            <p>&#8377;12,00,000</p>
                        </div>
                        <div className="actionSec2">
                            <Link to={'/payments'} ><button>See Details</button></Link>
                        </div>
                    </div>
                    <div className="action" id="action3">
                        <div className="actionSec1">
                            <h3>Paid Invoices</h3>
                            <p>&#8377;64,50,876</p>
                        </div>
                        <div className="actionSec2">
                            <Link to={'/payment-history'} ><button>See Details</button></Link>
                        </div>
                    </div>
                    <div className="action" id="action4">
                        <div className="actionSec1">
                            <h3>Credit Scoring</h3>
                            <p>High</p>
                        </div>
                        <div className="actionSec2">
                            <Link to={'/credit-score'}><button>See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
