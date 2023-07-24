import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./navpage";
import './home.css';
import create from "./create.jpg";
import invite from "./invite.jpg";
import reg from "./reg.jpg";
import time from "./time.jpg";
import homepic from "./homepic.jpg";
import Foot from "./footer";
export default function Home(){
    return(
        <div>
        <div><Navbar/></div>
        <div className="homebody">
            <div className="home-content">
                <div className="home-intro-content">
                "  Link Up For When It's Quitting Time."
                    <div><Link to="/cal" className="continue-btn-home" >Let 's start</Link></div>
                </div>
                <div className="home-side-image"><div>
                <img className="main-img-home" src={homepic} />
                </div>
                </div>   
            </div>
            <div className="home-content-two">
            
                <div class="step-heading">
                    <h1>HOW DOES OUR APP WORK?</h1>
                </div>
                <div className="step-about">
                    <div class="step-left">
                        <h2>1. Register and Set Up your Profile</h2>
                        <div className="img-home"><img className="img-home" src={reg} /></div>
                    </div>
                    <div class="step-left">
                        <h2>2.Create Meeting: Provide meeting details and set up your availability.</h2>
                        <div className="img-home"><img className="img-home" src={create}  alt="pic not found" /></div>
                    </div>
                    <div class="step-left">
                        <h2>3.Select Time: Participants choose their preferred meeting time from the options you provided.</h2>
                        <div className="img-home"><img className="img-home" src={time} alt="pic not found" /></div>

                    </div>
                    <div class="step-left">
                        <h2>4.Send Invitations: App sends meeting invitations to participants with all the necessary details.</h2>
                        <div className="img-home"><img className="img-home" src={invite} alt="pic not found" /></div>
                    </div>
                </div>
            </div>
        </div>
        <Foot/>
        </div>
    );
}