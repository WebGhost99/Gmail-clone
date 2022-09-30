import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser)
  const dispatch  = useDispatch();
  
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut;
  }

  
  return (
    <div className='header'>

        <div className='header__left'>
            <IconButton>
            <MenuIcon />
            </IconButton>
            <img src="gmail.jpg" alt=""/>
        </div>

        <div className='header__middle'>
            <SearchIcon />
            <input placeholder='Search mail' type="text" />
            <ArrowDropDown className='header__inputarrow'/>
        </div>

        <div className='header__right'>
            <IconButton>
            <AppsIcon />
            </IconButton>

            <IconButton>
            <NotificationsIcon /> 
            </IconButton>
            <IconButton>
            <Avatar onClick={logoutApp}  src={user?.photoUrl}  />
            </IconButton>
        </div>

    </div>
  )
}

export default Header