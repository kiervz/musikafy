import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';

import logo from '../assets/images/musikafy-2.png';
import { links } from '../assets/constants';
import { HiOutlineMenu } from "react-icons/hi";

interface NavLinkProps {
  handleClick?: (params?: React.SetStateAction<boolean>) => void
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks: React.FC<NavLinkProps> = ({ handleClick }) => {
    return <div className="mt-10">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  }

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#0E5E6F]">
        <img src={logo} alt="logo" className="w-full h-32 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        { mobileMenuOpen ?
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
          :
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          /> }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#0E5E6F]
        backdrop-blur-lg z-10 p-6 md:hidden transition-all ${mobileMenuOpen ? 'left-0' : '-left-full'}`
      }>
        <img src={logo} alt="logo" className="w-full h-32 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
}

export default Sidebar;
