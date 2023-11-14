import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain rounded-full' style={{ width: 'calc(10rem - 55px)', height: 'calc(10rem - 55px)' }} />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open("https://drive.google.com/file/d/1IdrgTx3ssDtzU1f1-53MPsnsRSE4bI5e/view", "_blank")}
        >
          Resume
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
