import React from 'react';
import './LoginScreen.css';
import {useState} from 'react';
import Formsignin from './Formsignin';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import logo from '../logo/logo.png';


function LoginScreen() {

    const [signin,setsignin]=useState(false);
 
    return (
        <div className="LoginScreen">
            <div className="loginBackground">
                <img className="LoginScreenlogo" src={logo} alt=""/>
                <button onClick={()=>setsignin(true)} className="loginscreenbutton">Sign in</button>
            </div>
            {
                (signin==true) ? <Formsignin signin={signin} setsignin={setsignin}/> :
                <div className="logincontents">
                <div className="contentsalllogin">
                    <div className="logintextcontent">
                        <div className="contentlogin">
                            <h1>Unlimited films,Tv programs and more.</h1>
                            <h3>Watch anytime, cancel anywhere</h3>
                        </div>
                        <div className="input-button">
                            <input placeholder="E Mail Address" type="text"/>
                            <button onClick={()=>setsignin(true)} >GET STARTED</button>
                        </div>
                        <div className="textp">
                            <p>Ready to watch? Enter your email and to create and access your account.</p>
                        </div>
                    
                        

                    </div>

                </div>
               
            </div>    
            }
    
        </div>
    )
}

export default LoginScreen 
