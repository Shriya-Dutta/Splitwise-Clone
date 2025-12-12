import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { BsPeople , BsReceiptCutoff  } from "react-icons/bs";

const Sidebar = () => {

    const location = useLocation();

    return (
        <div id="sidebar-container" className="sidebarContainer">

            <Link to="/friends" id="friends-link" className={`routeLink ${(location.pathname === '/' || location.pathname === '/friends') ? 'active' : '' }`}>
                <div id="friends" className="navTab">
                    <BsPeople  id="friends-icon" className="friendsIcon"/>
                    <span id="friends-title" className="friendsTitle">Friends</span>
                </div>
            </Link>

            <Link to="/expenses" id="expenses-link" className={`routeLink ${location.pathname === '/expenses' ? 'active' : '' }`}>
                <div id="expenses" className="navTab" >
                    <BsReceiptCutoff id="expenses-icon" className="expensesIcon"/>
                    <span id="expenses-title" className="expensesTitle">Expenses</span>
                </div>
            </Link>

        </div>
    );
};

export default Sidebar;