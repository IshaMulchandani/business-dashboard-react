import {React} from 'react'
import './Agreegement.css'
import { Link } from 'react-router-dom'

export default function Agreement(){
    return(
        <div className="agreementCont">
            <div className="sideNav">
            <h2>Agricred</h2>
                <ul>
                    <li>Basic Details</li>
                    <li>Contact & Finacial Details</li>
                    <li id="focusDet">Agreement & Verification</li>
                </ul>
            </div>
            <div className="page">
                <h2>Agreement & Verification</h2>
                <form action="">
                    <div className="panCard">
                        <label htmlFor="">Upload PAN Card</label>
                        <div className="input">
                            <div className="docSec">
                                <p>Upload Here</p>
                            </div>
                        </div>
                    </div>
                    <div className="adhaardCard">
                        <label htmlFor="">Upload Adhaar Card</label>
                        <div className="input">
                            <div className="docSec">
                                <p>Upload Here</p>
                            </div>
                        </div>
                    </div>
                    <div className="credScore">
                        <label htmlFor="">Upload CIBIL Report</label>
                        <div className="input">
                            <div className="docSec">
                                <p>Upload Here</p>
                            </div>
                        </div>
                    </div>
                    <div className="finReport">
                        <label htmlFor="">Upload GST Report</label>
                        <div className="input">
                            <div className="docSec">
                                <p>Upload Here</p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="btn">
                    <Link to={'/dashboard'}><button>Finish</button></Link>
                </div>
            </div>
        </div>
    )
}