import style from './Home.module.css'

export default function Home (){
    return (
        <div className={style.mainContent}>
            <div className={style.presentation}>
                <div className={style.namePresentation}>
                    <h2>Jefferson</h2>
                    <h2>Baldion</h2>
                    <h3>Desarrollador Full-Stack</h3>
                </div>
                <div className={style.imagePresentation}>
                    
                </div>
            </div>
            <div>
                Soy el Home
            </div>
        </div>
    )
}
