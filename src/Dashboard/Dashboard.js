import { React } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

export default function Dashboard(){
    return(
        <div className="dashboardCont">
            <h1 className="mainH2">AgriCred</h1>
            <div className="navBar">
                <ul>
                    <Link to={'/dashboard'}><li>Home</li></Link>
                    <Link to={'/pending-invoices'}><li>Pending Invoices</li></Link>
                    <Link to={'/payments'}><li>Upcoming Payments</li></Link>
                    <Link to={'/payment-history'} ><li>Payment History</li></Link>
                    <Link to={'/credit-score'}><li>Credit Score</li></Link>
                    <li>Settings</li>
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
    )
}