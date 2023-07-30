import logo from "../images/WanderlustLogo.png";
import PageLinks from "./PageLinks";
import PageIcons from "./PageIcons";
function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='Wanderlust' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks type='nav'></PageLinks>
        <PageIcons type='nav'></PageIcons>
      </div>
    </nav>
  );
}
export default NavBar;
