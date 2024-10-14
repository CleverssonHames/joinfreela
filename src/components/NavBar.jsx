import joinlogo from '../assets/img/joinfreela-logo.png';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="flex justify-between items-center h-20 w-full p-4 bg-black opacity-85 border-b border-white fixed top-0">
            <div className="flex align-middle">
                <img src={joinlogo} alt="logo da joinfreela" className='w-16 md:w-20'/>
            </div>
            <ul className="md:flex  gap-4 text-white text-lg hidden ">
                <li><NavLink to="/" className="" >Home</NavLink></li>
                <li><NavLink to="/">Sobre nós</NavLink></li>
                <li><NavLink to="/" className="bg-red-500 p-2 rounded text-black font-semibold transition-all hover:bg-red-700">Registre-se</NavLink></li>
            </ul>
            <button className="md:flex items-center gap-2 text-white text-lg p-2 hover:shadow-lg hover:shadow-red-500 rounded hidden">
                <FaRegCircleUser />
                Login
            </button>
            <FaBars className='fill-red-600 md:hidden block ' />
        </nav>
    )
}

export default NavBar;