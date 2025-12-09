import './Header.css';
import Logo from '../../Assets/Logo.png';
import { BsPersonCircle   } from 'react-icons/bs';

const Header = () => {

    return (
        <div id="header-container" className="headerContainer">

            <div id="title" className="title">
                <img src={Logo} id="logo" className="logo" alt="Splitwise Logo"></img>
                <span id="title-text" className="titleText">Splitwise</span>
            </div>

            <div id="profile" className="profile">
                <BsPersonCircle id="profile-icon" className="profileIcon" />
                <span id="name" className="name">Shriya Dutta</span>
            </div>
        </div>
    );
};

export default Header;