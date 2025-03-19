import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <div className="settingsCont">
            <h1 className="mainH2">AgriCred</h1>
            <div className="navBar">
                <ul>
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/pending-invoices">Pending Invoices</Link></li>
                    <li><Link to="/payments">Upcoming Payments</Link></li>
                    <li><Link to="/payment-history">Payment History</Link></li>
                    <li><Link to="/credit-score">Credit Score</Link></li>
                    <li>Settings</li>
                </ul>
                <h2 className="mainH2">Settings</h2>
            </div>
            <div className="settings-content">
                <div className="settings-section">
                    <h3>Account Settings</h3>
                    <div className="settings-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea placeholder="Enter your address"></textarea>
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Security Settings</h3>
                    <div className="settings-form">
                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="password" placeholder="Enter current password" />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" placeholder="Enter new password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="password" placeholder="Confirm new password" />
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Notification Preferences</h3>
                    <div className="settings-form">
                        <div className="form-group checkbox-group">
                            <label>
                                <input type="checkbox" />
                                Payment Reminders
                            </label>
                        </div>
                        <div className="form-group checkbox-group">
                            <label>
                                <input type="checkbox" />
                                Credit Score Updates
                            </label>
                        </div>
                        <div className="form-group checkbox-group">
                            <label>
                                <input type="checkbox" />
                                New Offers
                            </label>
                        </div>
                    </div>
                </div>

                <div className="btn">
                    <button>Save Changes</button>
                </div>
            </div>
        </div>
    );
}
