import { React } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'


export default function Contact(){
    const getOtp=(e)=>{
        e.preventDefault()
        let otpBox=document.getElementById('otpBox')
        otpBox.style.display="block"
    }
    return(
        <div className="contactCont">
            <div className="sideNav">
                <h2>Agricred</h2>
                <ul>
                    <li>Basic Details</li>
                    <li id="focusDet">Contact & Finacial Details</li>
                    <li>Agreement & Verification</li>
                </ul>
            </div>
            <div className="page">
                <h2>Contact & Financial Details</h2>
                <form action="">
                    <div className="repName">
                        <label htmlFor="">Authorised Representative Name</label>
                        <input type="text" />
                    </div>
                    <div className="mail">
                        <label htmlFor="">Email ID</label>
                        <div className="otpSec">
                            <input type="email" required/> 
                            <button onClick={getOtp}>Get OTP</button>
                        </div>
                    </div>
                    <div id="otpBox">
                        <label htmlFor="">Enter OTP</label>
                        <input type="number" />
                    </div>
                    <div className="accNum">
                        <label htmlFor="">Account Number</label>
                        <input type="number" />
                    </div>
                    <div className="bank">
                        <label htmlFor="">Bank</label>
                        <select name="" id="">
                            <option value="" selected disabled>Select</option>
                            <option value="">HDFC Bank</option>
                            <option value="">Yes Bank</option>
                            <option value="">State Bank of India</option>
                            <option value="">Other...</option>
                        </select>
                    </div>
                    <div className="finHist">
                        <label htmlFor="">Balance Sheet for Last F.Y</label>
                        <div className="input">
                            <div className="docSec">
                                <p>Drop File Here</p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="btn">
                <Link to={"/agreement&verification"}><button>Next</button></Link>
                </div>
            </div>
        </div>
    )
}