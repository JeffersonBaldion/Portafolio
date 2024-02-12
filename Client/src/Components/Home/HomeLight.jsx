import AboutLight from '../About/AboutLight'
import ContactMeLight from '../ContactMe/ContactMeLight'
import ProjectsLight from '../Projects/ProjectsLight'
import style from './HomeLight.module.css'

export default function HomeLight(){
    return (
    <div className={style.homeContainer}>
        <div className={style.presentacion}>
            <h1>Bienvenido a mi portafolio</h1>
            <h2>Soy Jefferson Baldion</h2>
            <h3>{'<Los limites estan para romperse/>'}</h3>
            <button>Contactame</button>
        </div>
        <div>
            <AboutLight/>
        </div>
        <div>
            <ProjectsLight/>
        </div>
        <div>
            <ContactMeLight/>
        </div>

    </div>
    )
}