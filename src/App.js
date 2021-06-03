import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Nav from './components/Nav';
import Search from './components/Search';
import LoginScreen from './components/login/LoginScreen';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {auth} from './components/firebase';
import {logout, login,selectUser} from './features/UserSlice';
import {useDispatch,useSelector} from 'react-redux';
import ProfileScreen from './components/ProfileScreen'


function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsub =auth.onAuthStateChanged((userAuth)=>{
      if (userAuth) {
        //logging.
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }));
       
      }
      else{
        dispatch(logout())
      }
    });
    return unsub;
  },[dispatch])

  return (
    <div className="App">
      <Router>
     
          {!user ? (
          
                     <LoginScreen/>
           
          ): (
          
      <Switch>

            <Route path="/profile">
                <ProfileScreen/>
            </Route>
           
            <Route exact path="/">
              
                 <HomeScreen/>
            </Route>
      </Switch>
            
          )}
  
      </Router>
    
     
    </div>

   
    
  );
}

export default App;
