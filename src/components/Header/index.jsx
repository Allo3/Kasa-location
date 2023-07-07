import {NavLink} from 'react-router-dom'
import "./header.sass"
import logo from "../../assets/test.png"

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <nav>
                <div className="links">
                    <NavLink to="/" className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : ""}>Accueil </NavLink>
                    <NavLink to="/About" className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : ""}>À propos </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header