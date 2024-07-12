import pichinchaLogo from '../../assets/PichinchaLogo.svg';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <img src={pichinchaLogo} className="logo" alt="Banco Pichincha logo" />
    </header>
  )
};

export default Header;
