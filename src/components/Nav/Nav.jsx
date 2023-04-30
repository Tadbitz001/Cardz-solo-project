import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">CARDZ</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
            <HomeIcon style={{fontSize: 28}}/>
            </Link>

            <Link className="navLink" to="/displayprofile">
              <AccountBoxIcon/>
            </Link>

            <Link className="navLink" to="/cardform">
              <AddBoxOutlinedIcon/>
            </Link>

            {/* <Link className="navLink" to="/profile">
              UserProfile
            </Link> */}

            {/* <Link className="navLink" to="/indcarddetails">
              Indv.Details 
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}  
            <Link className="navLink" to="/about"> 
              About
            </Link>
            
            <LogOutButton className="navLink" />
          </>
        )}


      </div>
    </div>
  );
}

export default Nav;
