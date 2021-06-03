import React,{useState,useEffect} from 'react'
import './Nav.css';
import {useHistory} from'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { HiMenu } from "react-icons/hi";
import {Link,NavLink} from 'react-router-dom';
import Search from './Search'
import logo from './logo/logo.png'


function Nav({setsearchon,searchon,movies,setmovies}) {
    const [icon,seticon]=useState(false);
    const [show,setshow]=useState(false);
    const [hamburger,sethamburger]=useState(true);
    const [search,setsearch]=useState('');
  
    
    const history=useHistory( );
    
    useEffect(() => {
            window.addEventListener('scroll',() => {
                if(window.scrollY>100) {
                    setshow(true);
                }
                else{
                    setshow(false);
                }
            })
    },[])   
   
    async function submit(e){
           e.preventDefault(); 
           setsearch('');
           const response=await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=db29f7767df47e8dbbba2d9656633e03&query=${search}`);
           const data=await response.json();
           setmovies(data.results);
           console.log(data.results,search);
          
        
    }
    function searchval(e){
          setsearch(e.target.value);
    
    }   
 

    function iconclick(){
        try {
            seticon(!icon);
            setsearch('');
            
            setsearchon(!searchon);
          }
          catch(err) {
           history.push('/')
          }
       

    }

    function hamburgericon(e){
        sethamburger(!hamburger);
    }
   
   

   

  
    return (
        <div className={`nav ${show && "nav_black" }`}>
              <div className={`nav_contents ${hamburger==true ? 'deactive' : ''}`}>
                    <NavLink  activeClassName="curractive" exact to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink   activeClassName="curractive"  to="/profile">
                        <p>Profile</p>
                    </NavLink>
             </div>
                    <Link  to='/'>
                        <img 
                            className="nav_logo" 
                            src={logo} alt=""/>
                    </Link>
                   
                    <div className="icons">
                           
                            <form  onSubmit={submit} className="search">
                                <FaSearch onClick={iconclick} className={`FaSearch ${icon ==true ? "active" : ''}`}/>
                            <input className={`input ${icon==true ? "active" : ''}`}  onChange={searchval} type="text" placeholder="Search" value={search}></input>
                            </form>
                          
                                <Link  >
                            <img 
                          
                                onClick={()=>history.push("/profile")}
                                className="nav_avatar" 
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                            </Link>
                          
                            <HiMenu  onClick={hamburgericon} className="menu"/>
                            
                    </div>
                
        </div>
    )
}

export default Nav;
