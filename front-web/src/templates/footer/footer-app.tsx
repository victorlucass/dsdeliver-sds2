import '../footer/footer-app.css';
import { ReactComponent as Youtube } from '../footer/svg/youtube.svg';
import { ReactComponent as Linkedin } from '../footer/svg/linkedin.svg';
import { ReactComponent as Instagram } from '../footer/svg/instagram.svg';

function FooterApp(){
  return(
   <footer className='main-footer'> 
    App desenvolvido durante a 2º ed. do evento Semana DevSuperior
    <div className='footer-icons'>
      <a href="#"> <Youtube/> </a>
      <a href="#"> <Linkedin/> </a>
      <a href="#"> <Instagram/> </a>
    </div>
   </footer>
  )
}

export default FooterApp;