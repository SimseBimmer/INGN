import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/Alle">Alle</NavLink></li>
                <li><NavLink to="/Indland">Indland</NavLink></li>
                <li><NavLink to="/Udland">Udland</NavLink></li>
                <li><NavLink to="/Teknologi">Teknologi</NavLink></li>
                <li><NavLink to="/Sport">Sport</NavLink></li>
                <li><NavLink to="/Politik">Politik</NavLink></li>
                <li><NavLink to="/Samfund">Samfund</NavLink></li>
            </ul>
        </nav>
    )
}

