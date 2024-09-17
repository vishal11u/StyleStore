import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { BiSearchAlt2, BiLogoInstagramAlt } from 'react-icons/bi';
import { IoReloadCircleSharp } from 'react-icons/io5';
import { BsFacebook } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { FaSquareTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { IoBagHandleSharp } from "react-icons/io5";
import InputSearch from './InputSearch';
import Topbar from '../topBar/Topbar';

export const categotyData = [
  { id: 1, title: "Mens", path: "/productlisting" },
  { id: 2, title: "Womens", path: "/productlisting" },
  { id: 3, title: "Sports", path: "/productlisting" },
  { id: 4, title: "Kids", path: "/productlisting" },
  { id: 5, title: "Mibiles", path: "/productlisting" },
  { id: 6, title: "Electronics", path: "/productlisting" },
  { id: 7, title: "Grossary", path: "/productlisting" }
]

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const item = useSelector((state) => state.cart);

  const hamburger = () => {
    setNav(!nav);
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavClose = () => {
    setNav(false);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: "white",
      color: "black"
    },
  }));

  return (
    <div className='flex justify-around shadow-lg items-center md:py-2 md:justify-evenly sticky top-0 left-0 z-50 bg-gray-800'>

      {/* Mobile Navbar ------------------------------------------------------------------------------ */}
      <button className='md:hidden text-yellow-400' onClick={hamburger}><Hamburger toggled={isOpen} toggle={setOpen} size={25} /></button>

      <ul className={nav ? 'fixed h-full w-[80%] uppercase top-[6.7%] pt-10 left-0 duration-500 shadow-lg bg-gray-800 ease-in-out text-center text-white ' : 'duration-300 bg-gray-800 h-full ease-in-out top-[6%] pt-10 fixed left-[-100%]'}>
        {categotyData.map((list) => (
          <li key={list?.id} className='py-2 w-full hover:bg-white hover:text-black transition-all' onClick={handleNavClose}><Link to={list?.path}>{list?.title}</Link></li>
        ))}
        <hr />

        <div className='flex justify-evenly bg-yellow-400 text-black mt-8'>
          <Link onClick={handleNavClose} className='px-3 py-2' to='/about'>About</Link>
          <Link onClick={handleNavClose} className='px-3 py-2' to='/contact'>Contact</Link>
        </div>
        <hr />

        <div className='flex justify-evenly py-3 border-b text-yellow-400'>
          <Link onClick={handleNavClose} to='/track'>Track Order</Link>
        </div>

        <div className='flex justify-center gap-4 pt-24 items-center'>
          <li><Link onClick={handleNavClose} to='/'><BsFacebook size={26} /></Link></li>
          <li className='py-1'><Link onClick={handleNavClose} to='/'><BiLogoInstagramAlt size={32} /></Link></li>
          <li><Link onClick={handleNavClose} to='/'><FaSquareTwitter size={27} /></Link></li>
          <li><Link onClick={handleNavClose} to='/'><IoLogoYoutube size={30} /></Link></li>
        </div>

        <div className='mt-2 text-xs py-2 bg-yellow-400 w-full'>
          ©2023 All rights reserved :- StyleStore
        </div>
      </ul>

      {/* Desktop Navbar -------------------------------------------------------------------------------------------------------- */}
      <Link to="/" className='flex items-center'>
        <img className='h-9 md:h-10 cursor-pointer' src='https://clipartcraft.com/images/v-logo-transparent-7.png' alt='' />
        <h1 className='hidden text-white md:text-xl md:flex'>StyleStore</h1>
      </Link>

      {/* ------------------------------------------------------------------------------------------------ */}
      <Topbar />
      {/* ------------------------------------------------------------------------------------------------ */}

      <div className='hidden md:flex justify-between'>
        <InputSearch />
      </div>

      {/* ------------------------------------------------------------------------------------------------ */}
      <div className='flex gap-3 md:gap-x-2 items-center text-white transition-all'>
        <Link className='hover:text-yellow-400 mt-2' to='/'> <IoReloadCircleSharp size={30} /></Link>
        <IconButton aria-label="cart">
          <Link className='' to="/cart">
            <StyledBadge badgeContent={item.length}>
              <IoBagHandleSharp className='text-white hover:text-yellow-300' size={27} />
            </StyledBadge>
          </Link>
        </IconButton>

        <React.Fragment>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? 'account-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
                <Avatar src='https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236_640.jpg' sx={{ width: 40, height: 40 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} PaperProps={{ elevation: 0, sx: { overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5, '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, src: "", mr: 1, }, '&:before': { content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0, }, }, }} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
            <MenuItem onClick={handleClose}>
              <Avatar /><p>Profile</p>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              <Link to="/login">Add another account</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>

        </React.Fragment>
      </div>
    </div>
  )
}

export default NavBar;
