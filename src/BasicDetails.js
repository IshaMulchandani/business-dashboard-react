import { React } from 'react';
import './BasicDetails.css'
import { Link } from 'react-router-dom'

export default function BasicDetails() {
    return(
        <div className="basicDetCont">
            <div className="sideNav">
                <h2>Agricred</h2>
                <ul>
                    <li id="focusDet">Basic Details</li>
                    <li>Contact & Finacial Details</li>
                    <li>Agreement & Verification</li>
                </ul>
            </div>
            <div className="page">
                <h2>Enter Basic Details</h2>
                <form action="">
                    <div className="bizName">
                        <label htmlFor="">Business Name</label>
                        <input type="text" required/>
                    </div>
                    <div className="bizType">
                        <label htmlFor="">Business Type</label>
                        <select name="" id="">
                            <option value="" selected disabled>Select...</option>
                            <option value="">FPC</option>
                            <option value="">Trader</option>
                            <option value="">Mill</option>
                            <option value="">Agri Processor</option>
                        </select>
                    </div>
                    <div className="gstno">
                        <label htmlFor="">GST Number</label>
                        <input type="text" name="" id="" required/>
                    </div>
                    <div className="pancard">
                        <label htmlFor="">PAN Card Number</label>
                        <input type="text" required />
                    </div>
                    <div className="bizRegNo">
                        <label htmlFor="">Business Registration Number</label>
                        <input type="text" required/>
                    </div>
                </form>
                <div className="btn">
                <Link to={"/contactDetails"}><button>Next</button></Link>
                </div>
            </div>
        </div>
    )
}