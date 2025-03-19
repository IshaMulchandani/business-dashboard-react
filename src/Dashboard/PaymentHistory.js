import { React, useState } from 'react'
import './PaymentHistory.css'
import { Link } from 'react-router-dom'

export default function PaymentHistory(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
        const toggleDropdown = () => {
            setDropdownOpen(!dropdownOpen);
        };
    return(
        <div className="payHistCont">
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
                <h2 className="mainH2">Payment History</h2>
                <div className="payHistTable">
                    <table>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Seller Name</th>
                            <th>Invoice Amount</th>
                            <th>Paid Date</th>
                            <th>Payment Method</th>
                        </tr>
                        <tr>
                            <td>#098</td>
                            <td>Aakash</td>
                            <td>&#8377;4,00,000</td>
                            <td>12 March, 2025</td>
                            <td>UPI</td>
                        </tr>
                        <tr>
                            <td>#890</td>
                            <td>Vidya</td>
                            <td>&#8377;6,00,000</td>
                            <td>12 March, 2025</td>
                            <td>Bank Transfer</td>
                        </tr>
                        <tr>
                            <td>#678</td>
                            <td>Karan</td>
                            <td>&#8377;30,000</td>
                            <td>12 March, 2025</td>
                            <td>UPI</td>
                        </tr>
                        <tr>
                            <td>#486</td>
                            <td>Lalit</td>
                            <td>&#8377;48,600</td>
                            <td>12 March, 2025</td>
                            <td>NEFT</td>
                        </tr>
                        <tr>
                            <td>#234</td>
                            <td>Aakash</td>
                            <td>&#8377;85,700</td>
                            <td>12 March, 2025</td>
                            <td>RTGS</td>
                        </tr>
                    </table>
                </div>
                <div className="btns">
                    <div className="hist-btn" id="hist-btn1">
                        <button>Download Receipts</button>
                    </div>
                    <div className="hist-btn" id="hist-btn2">
                        <button>Payment Confirmation History</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}