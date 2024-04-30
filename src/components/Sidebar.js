import React from 'react'
import { useState } from 'react';
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { Menu } from './Menu'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(true)

  return (
    <div className={`${open ? 'w-72' : 'w-20'} bg-pink h-screen p-5 pt-8 duration-300 relative`}>
        
            {/*Sidebar Adjust Icon*/}      
        <FaArrowLeft className={`absolute top-16 -right-3 p-1 bg-white text-pink rounded-full border-[1px] text-3xl border-pink cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

            {/*Company Name and Logo*/}
        <div className='inline-flex items-center'>
            <FaStethoscope className={`bg-black text-white text-4xl p-2 rounded-md float-left block duration-500 ${!open && "rotate-[360deg]"}`} />
            <h1 className={`text-xl font-bold ml-2 font-pacifico origin-left ${!open && "hidden"} duration-300`}>LOCUM DOCTORS</h1>
        </div>

            {/*Search Bar*/}
        <div className={`text-white mt-4 py-2 px-3 flex items-center bg-lightpink rounded-full duration-300 gap-4 ${!open && "scale-0"}`}>
            <FaSearch className='' />
            <input type='search' placeholder='Search' className={`bg-transparent placeholder:text-white placeholder:italic focus:outline-none `} />
        </div>

            {/*List of Sidebar Items*/}
        <ul className='pt-8 text-white'>
            {Menu.map((menu, index) => (
               <div> 
               <Link to={menu.path} ><li key={index} className={`flex items-center space-x-4 py-2 hover:bg-lightpink px-3 text-sm rounded-md duration-300 ${menu.spacing? "mt-4" : "mt-0"}`}>
                <span className='text-xl'>{menu.icon}</span>
                <span className={`flex-1 ${!open && "hidden"} `}>{menu.title}</span>
                {menu.submenu && (<IoIosArrowDown onClick={() => setSubmenuOpen(!submenuOpen)} className={`${submenuOpen && "rotate-180"}`} />)}
                </li></Link>
            
                {menu.submenu && submenuOpen && (
                    <ul>
                        {menu.submenuItems.map((submenuItem, index) => (
                        <li key={index} className={`hover:bg-lightpink px-12 text-sm rounded-md py-1 ${!open && "hidden"}`}>{submenuItem.title}</li>
                    ))}
                    </ul>
                )}
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar
