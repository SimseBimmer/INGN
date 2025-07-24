import { NavBar } from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'

import './header.scss'

export const Header = () => {
    return (
        <header>
            <div id='HeaderContainer'>
                <h1 id='HeaderLogo'><NavLink to="/Alle">INGN</NavLink></h1>
                <NavBar />
                <div id="LoginMenu">
                    <NavLink  to="/Login"><img src="/Login.svg" alt="Login" /></NavLink>
                    <img src="/BurgerMenu.svg" alt="Login" />
                </div>
            </div>
        </header>
    )
}