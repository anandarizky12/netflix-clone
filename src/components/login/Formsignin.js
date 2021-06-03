import React,{useRef,useState} from 'react';
import {auth} from '../firebase';
import {useHistory} from 'react-router-dom';
import './Formsignin.css'

function Formsignin() {
    const history=useHistory();
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const [signup,setsignup]=useState(false);
    const signin=(e)=>{
            e.preventDefault();

            auth.signInWithEmailAndPassword(
                emailref.current.value,
                passwordref.current.value
            ).then((authUser)=>{
                console.log(authUser); 
             

            }).catch(error=>{
              alert(error.message);
           
            });
    }

    const register=(e)=>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch(error=>{
          alert(error.message);
         
        });

    }
   
   
    
    return (
        <div className="form-signin">
                <form onSubmit={signin,history.push('/')} className="signinform">
                    {
                        !signup ?     
                        <h1>Sign In</h1>:
                        <h1>Sign Up</h1> 
                    }
                    <input ref={emailref} type="text" placeholder="E Mail"/>
                    <input ref={passwordref} type="Password" placeholder="Password"/>
                    {!signup ?   <button onClick={signin}  type="submit">Sign In</button>:
                                 <button onClick={register}  type="submit">Sign Up</button>
             
                    }
                      
                
                </form>
                {!signup ?  <p>New to Netflix ?<span onClick={()=>alert("Not Available Yet, Please Wait for 5 more years...")}> Sign Up Now</span></p>
                :  <p>Already Have An account ?<span onClick={()=>setsignup(false)}> Sign In</span></p>}
               
        </div>
    )
}

export default Formsignin;
