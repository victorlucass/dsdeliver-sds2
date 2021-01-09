import { Link } from 'react-router-dom';
import '../navbar/app-navbar.css'
import {ReactComponent as Logo} from '../navbar/logo.svg'
// Ou seja, esse ReactComponet ele permite usar svg e nomear com o nome  que quisermos.
function NavbarApp(){
  return(
    <nav className='main-navbar'>
      <Logo/>
      <Link to='/' className='logo-title'>DS Delivery</Link>
    </nav>
  );
}

export default NavbarApp;