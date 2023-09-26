import style from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <div className={style.headerContainer}>
            <div className={style.logo}>
                PORTAFOLIO
            </div>
            <div className={style.menu}>
                
                <Link to='/'>Home</Link>
                <Link to='/about'>About me</Link>
                <Link to='/projects'>Projects</Link>

            </div>
            <div className={style.contact}>
                Contact me
            </div>
        </div>
    )
}