import style from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <div className={style.headerContainer}>
            <div className={style.logo}>
            ! <ion-icon name="bug"></ion-icon> _Portafolio
            </div>
            <div className={style.menu}>

                <a href='#aboutMe'>About me</a>
                <a href='#projects'>Projects</a>

            </div>
        </div>
    )
}