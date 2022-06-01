import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import './Navbar.module.css';

const NavBar = () => (
  <nav>
    <h1>Math Magicien</h1>
    <div className="link-items">
      <NavLink to="/">Home</NavLink>
      <Divider vertical />
      <NavLink to="/calculator">Calculator</NavLink>
      <Divider className="divider" vertical />
      <NavLink to="/quote">Quote</NavLink>
    </div>
  </nav>
);

export default NavBar;
