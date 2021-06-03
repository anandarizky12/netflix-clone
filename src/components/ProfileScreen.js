import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav';
import {useSelector} from 'react-redux';
import  {selectUser} from '../features/UserSlice'; 
import {auth} from './firebase'
function ProfileScreen() {
    const user=useSelector(selectUser)
    return (
      
        <div className="profile-screen">
            <Nav />
            <div className="profile-container">
                <div className="profilebody">
                    <h1>Edit Profile</h1>
                    <hr/>
                    <div className="allinfo">
                         
                            <div className="info">
                                <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                            </div>
                            <div className="detail_profiles">
                                <h2>{user.email}</h2>
                                <h5>Plans</h5>
                                <button onClick={()=>auth.signOut()} className="profile_signout">Sign Out</button>
                            </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
