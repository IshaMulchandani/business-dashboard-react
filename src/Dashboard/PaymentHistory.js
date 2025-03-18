import { React } from 'react'
import './PaymentHistory.css'
import { Link } from 'react-router-dom'

export default function PaymentHistory(){
    return(
        <div className="payHistCont">
            <h1 className="mainH2">AgriCred</h1>
            <div className="navBar">
                <ul>
                    <Link to={'/dashboard'}><li>Home</li></Link>
                    <Link to={'/pending-invoices'}><li>Pending Invoices</li></Link>
                    <Link to={'/payments'}><li>Upcoming Payments</li></Link>
                    <Link to={'/payment-history'} ><li>Payment History</li></Link>
                    <li>Credit Score</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}