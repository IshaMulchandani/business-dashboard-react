import React from 'react';
import './CreditScore.css';
import { Link } from 'react-router-dom';

export default function CreditScore() {
    return (
        <div className="credScoreCont">
            <h1 className="mainH2">AgriCred</h1>
            <div className="navBar">
                <ul>
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/pending-invoices">Pending Invoices</Link></li>
                    <li><Link to="/payments">Upcoming Payments</Link></li>
                    <li><Link to="/payment-history">Payment History</Link></li>
                    <li><Link to="/credit-score">Credit Score</Link></li>
                    <Link to={'/settings'}><li>Settings</li></Link>
                </ul>
            </div>
            <div className="summary">
                <div className="line3">
                    <h3 style={{ textAlign: "center" }}>Credit Report</h3>
                    <div className="report-content">
                        <div className="score">
                            <h4>Krushi Score <span style={{ margin: "20vw", color: "green", fontSize: "larger" }}>950</span></h4>
                            <div className="progress-container">
                                <div className="segment red"></div>
                                <div className="segment orange"></div>
                                <div className="segment yellow"></div>
                                <div className="segment green"></div>
                            </div>
                        </div>
                        <div className="line">
                            <h3>Repaid: <span style={{ fontSize: "larger", margin: "20vw" }}>50%</span></h3>
                            <div className="bar-container">
                                <div className="bar-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pastIncome">
                    <h3>Past Income</h3>
                    <div className="years">
                        {[2024, 2023, 2022].map((year, index) => (
                            <div className="income-card" key={index} id={`income-card${index + 1}`}>
                                <h4 style={{ color: "grey" }}>{year}</h4>
                                <hr />
                                <h3>&#8377;{year === 2024 ? "80,00,000" : year === 2023 ? "60,00,000" : "63,00,000"}</h3>
                                <p><span style={{ color: "grey" }}>Field:</span> 22.4 Acres</p>
                                <p><span style={{ color: "grey" }}>Crop:</span> Soybean</p>
                                <p><span style={{ color: "grey" }}>Average market price:</span> &#8377;{year === 2024 ? "20,000" : year === 2023 ? "18,000" : "17,500"}/ton</p>
                                <p><span style={{ color: "grey" }}>Average crop yield:</span> &#8377;{year === 2024 ? "1.81" : year === 2023 ? "1.41" : "1.31"} ton/acre</p>
                                <hr />
                                <p style={{ color: "grey" }}>Income Reported by farmer</p>
                                <h3>&#8377;{year === 2024 ? "92,59,000" : year === 2023 ? "72,09,000" : "62,82,000"}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="btn">
                    <button>Download Report</button>
                </div>
            </div>
        </div>
    );
}
