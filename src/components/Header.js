import '../Sass/components/_header.scss';
import logo from '../logo.svg';
import Nav from './header/Nav';

function Header() {
    return(
        <header>
            <img src={logo} alt="logo" className="App-logo"/>
            <Nav/>
        </header>
    )
}

export default Header; 