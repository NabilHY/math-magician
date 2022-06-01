import { NavLink } from 'react-router-dom';
import './Navbar.module.css';

const NavBar = () => (
  <nav>
    <h1>Math Magicien</h1>
    <div className="link-items">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/quote">Quote</NavLink>
    </div>
  </nav>
);

export default NavBar;
