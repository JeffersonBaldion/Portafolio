import style from './Projects.module.css'

export default function Projects(){
    return(
        <div className={style.projectsContainer}>
            <div className={style.projectTitles}>
                <div>Caravana</div>
                <div>ApiDogs</div>
            </div>
            <div className={style.toogleProject}>
                Proyectos
            </div>
            <div className={style.tecnologia}>
                Tecnologias
            </div>
        </div>
    )
}