import { useState } from "react";
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false)
   window.onscroll = ()=>{
       setIsScrolled(window.pageYOffset === 0 ? false : true)
       return ()=> window.onscroll = null
   }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
               <img
               src="./netflix_logo.png"
               alt="netflix-logo"
               />
               <span>Homepage</span>
               <span>Series</span>
               <span>Movies</span>
               <span>New and Popular</span>
               <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className="icon"  />
                <span>KID</span>
                <NotificationsIcon className="icon"/>
                <img src="./profil.jpeg" alt="profile-pic" />
                <div className="profile">
                    <ArrowDropDownIcon  className="icon"/>
                    <div className="options">
                        <span>settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar