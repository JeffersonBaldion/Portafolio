import style from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Header () {
    return (
        <div className={style.headerContainer}>
            <div className={style.logo}>
                
                <div className={style.logoContainer}>
                    <p>Jeff</p><p className={style.tm}>TM</p>
                </div>
            </div>
            <div className={style.menu}>
                <a className={style.link} href='#aboutMe'>About me</a>
                <a className={style.link} href='#projects'>Projects</a>
                
            </div>
            <div className={style.buttonContainer}>
                <div className={style.buttonCv}>
                    Descargar CV
                </div>
            </div>
        </div>
    )
}