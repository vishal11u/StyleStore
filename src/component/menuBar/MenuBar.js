import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiSolidDownArrowCircle } from 'react-icons/bi'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Select from './Select/Select'
import Select2 from './Select/Select2'
import Select3 from './Select/Select3';
import { categotyData } from '../navbar/NavBar';

const MenuBar = () => {
    return (
        <div className='hidden md:flex md:justify-between lg:px-16 w-full bg-yellow-400 items-center shadow'>
            <div className='hidden md:flex md:justify-between items-center gap-x-5'>
                <div className='mt- hidden md:block '>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <div className=''>
                                <div className='lg:gap-4 text-[12px] ml-1 gap-x-1 lg:text-[16px] flex text-white px-3 py-1.5 -mb-2.5 cursor-pointer rounded-tr-lg rounded-tl-lg items-center bg-black' sx={{ backgroundColor: "black", paddingBottom: "10px", textAlign: "center", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} variant="contained" {...bindTrigger(popupState)}>
                                    <RiMenu2Line size={20} />
                                    All Products
                                    <BiSolidDownArrowCircle size={20} />
                                </div>
                                <Menu {...bindMenu(popupState)}>
                                    {categotyData.map((list) => (
                                        <MenuItem key={list.id} onClick={popupState.close}><Link to={list.path}>{list.title}</Link></MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        )}
                    </PopupState>
                </div>
                <div className='flex items-center mt-2'>
                    <Select />
                    <Select2 />
                    <Select3 />
                </div>
            </div>

            <div className='py-3 items-center font-semibold text-gray-800'>
                <Link to='/about' className='px-4 transition-all hover:text-white'>About</Link>
                <Link to='/contact' className='px-4 transition-all hover:text-white'>Contact</Link>
                <Link to='/track' className='px-4 transition-all hover:text-white'>Track Order</Link>
            </div>
        </div>
    )
}

export default MenuBar;