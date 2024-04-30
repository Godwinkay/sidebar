import { FaHome } from "react-icons/fa";
import { FaUserDoctor, FaAddressCard } from "react-icons/fa6";
import { MdMedicalServices,  MdOutlineLogout } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { RiCustomerService2Fill, RiFolderHistoryFill } from "react-icons/ri";





export const Menu = [
    {title: "Home" , path: "/", icon:<FaHome /> },
    {title: "Find A Doctor" , path: "/doctor", icon:<FaUserDoctor /> },
    {title: "Insurance" , path: "/insurance", icon:<FaAddressCard /> },
    {title: "Services",
     path: "/services",
     icon:<MdMedicalServices /> ,
     spacing:true,
    submenu: true,
    submenuItems: [
        {title: "Gynaecology"},
        {title: "Optometry"},
        {title: "Pediatrics"},
        {title: "Home Service"}
]},
    {title: "Careers" , path: "/careers", icon:<GrUserWorker /> }, 
    {title: "Customer Services" , path: "/customercare", icon:<RiCustomerService2Fill /> }, 
    {title: "About" , path: "/about", spacing:true, icon:<RiFolderHistoryFill /> }, 
    {title: "Logout" , path: "/logout", icon:<MdOutlineLogout /> }, 
]