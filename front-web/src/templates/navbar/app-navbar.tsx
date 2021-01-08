import '../navbar/app-navbar.css'
import {ReactComponent as Logo} from '../navbar/logo.svg'
// Ou seja, esse ReactComponet ele permite usar svg e nomear com o nome  que quisermos.
function NavbarApp(){
  return(
    <nav className='main-navbar'>
      <Logo/>
      <a href="#" className='logo-title'>DS Delivery</a>
    </nav>
  );
}

export default NavbarApp;