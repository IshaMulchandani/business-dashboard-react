import { React } from 'react'
import './PendingInvoices.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function PendingInvoices(){

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
        const toggleDropdown = () => {
            setDropdownOpen(!dropdownOpen);
        };
    return(

        <div className="pedingInvoicesCont">
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
                <h2 className="mainH2">Pending Invoices</h2>
                <div className="invtable">
                    <table>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Seller Name</th>
                            <th>Invoice Amount</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Payment</th>
                        </tr>
                        <tr>
                            <td>#123</td>
                            <td>Anjali Co.</td>
                            <td>&#8377;50,000</td>
                            <td>20 March, 2025</td>
                            <td className="status">Pending</td>
                            <td><Link to={'/payment-gateway'}><button>Pay Now</button></Link></td>
                        </tr>
                        <tr>
                            <td>#321</td>
                            <td>Isha Co.</td>
                            <td>&#8377;40,890</td>
                            <td>20 March, 2025</td>
                            <td className="status">Pending</td>
                            <td><Link to={'/payment-gateway'}><button>Pay Now</button></Link></td>
                        </tr>
                        <tr>
                            <td>#456</td>
                            <td>Satyam Co.</td>
                            <td>&#8377;1,00,000</td>
                            <td>20 March, 2025</td>
                            <td className="status">Pending</td>
                            <td><Link to={'/payment-gateway'}><button>Pay Now</button></Link></td>
                        </tr>
                        <tr>
                            <td>#654</td>
                            <td>Sakshi Co.</td>
                            <td>&#8377;80,000</td>
                            <td>20 March, 2025</td>
                            <td className="status">Pending</td>
                            <td><Link to={'/payment-gateway'}><button>Pay Now</button></Link></td>
                        </tr>
                        <tr>
                            <td>#789</td>
                            <td>Rohan Co.</td>
                            <td>&#8377;46,750</td>
                            <td>20 March, 2025</td>
                            <td className="status">Pending</td>
                            <td><Link to={'/payment-gateway'}><button>Pay Now</button></Link></td>
                        </tr>
                        
                    </table>
                </div>
                <div className="btns">
                        <div className="btn-invoices" id="btn1">
                            <button>Request Payment Extension</button>
                        </div>
                        <div className="btn-invoices" id="btn2">
                            <button>Flag Dispute</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}