
import { useContext, useEffect, useState } from "react";


import {  NavLink } from "react-router-dom";

import sun from "./light.png";
import moon from "./dark.png";


const Navbar = () => {
    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
  
    // update state on toggle
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  
    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      // add custom data-theme attribute to html tag required to update theme using DaisyUI
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    


    const navlinks=<>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/favourite'>Favourite</NavLink></li>
        
        
    </>
    return (
        <div>
           <div className="navbar bg-green-400">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-400">
      {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl bg-blue-200 border-8">DoodleInc</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>

  <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
  
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         
        </div>
      </label>
      
  </div>
</div>
</div>
       
    );
};

export default Navbar;