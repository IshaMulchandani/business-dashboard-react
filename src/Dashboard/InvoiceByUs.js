import React from 'react'
import './InvoiceByUs.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function InvoiceByUs(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return(
        <div className="invByUsCont">
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
                <h2 className="mainH2">Invoices Drawn by Us</h2>
                <div className="table">
                    <table>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Buyer Name</th>
                            <th>Amount</th>
                            <th>Deal Started</th>
                            <th>Maturity Date</th>
                            <th>Reminder</th>
                        </tr>
                        <tr>
                            <td>#345</td>
                            <td>Vivanta</td>
                            <td>&#8377;6,05,000</td>
                            <td>12 June 2020</td>
                            <td>15 July 2025</td>
                            <td><button>Send Reminder</button></td>
                        </tr>
                        <tr>
                            <td>#678</td>
                            <td>Taj Group</td>
                            <td>&#8377;65,000</td>
                            <td>12 June 2020</td>
                            <td>15 July 2025</td>
                            <td><button>Send Reminder</button></td>
                        </tr>
                        <tr>
                            <td>#468</td>
                            <td>JW Mariott</td>
                            <td>&#8377;80,000</td>
                            <td>12 June 2020</td>
                            <td>15 July 2025</td>
                            <td><button>Send Reminder</button></td>
                        </tr>
                        <tr>
                            <td>#135</td>
                            <td>Trident</td>
                            <td>&#8377;1,25,000</td>
                            <td>12 June 2020</td>
                            <td>15 July 2025</td>
                            <td><button>Send Reminder</button></td>
                        </tr>
                        <tr>
                            <td>#963</td>
                            <td>Oberoi Group</td>
                            <td>&#8377;2,25,000</td>
                            <td>12 June 2020</td>
                            <td>15 July 2025</td>
                            <td><button>Send Reminder</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}