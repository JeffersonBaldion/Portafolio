import style from './Banner.module.css'

export default function Banner(){
    return (
        <div className={style.bannerContainer}>
            <div className={style.banner}>
                <a href='#'><ion-icon name="logo-github"></ion-icon></a>
                <a href='#'><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href='#'><ion-icon name="mail-outline"></ion-icon></a>
                <a href='#'><ion-icon name="call-outline"></ion-icon></a>
            </div>
        </div>
    )
}