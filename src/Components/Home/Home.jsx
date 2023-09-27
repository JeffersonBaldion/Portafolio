import style from './Home.module.css'
import About from '../About/About'

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
            <div className={style.aboutMe}>
                <div>
                    <About/>     
                </div>
            </div>
            <div className={style.project}>
                <h2>Proyectos</h2>
                
            </div>
        </div>
    )
}
