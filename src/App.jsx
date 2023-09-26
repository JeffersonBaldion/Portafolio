import style from './App.module.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

function App() {
  

  return (
    <div>
      <div className={style.headerContainer}>
        <Header/>
      </div>

      <div className={style.contentContainer}>
        <Routes>
          <Route path='/' element= {<Home/>}/>  
          <Route path='/about' element= {<About/>}/>  
          <Route path='/projects' element= {<Projects/>}/>  
        </Routes>
      </div>
    </div>
  )
}

export default App
