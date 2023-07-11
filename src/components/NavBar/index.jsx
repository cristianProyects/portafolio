import { NavLink } from 'react-router-dom'
import file from '../../icons/carpeta.svg'
import contact from '../../icons/carpeta-contacto.svg'
import me from '../../icons/carpeta-me.svg'
import proyectsFile from '../../icons/carpeta-conocimientos-lenguajes.svg'
import fileShow from '../../icons/carpeta-show.svg'
import home  from '../../icons/home.svg'
import './styles.css'
import { useContext } from 'react'
import { ProviderContext } from '../../context/context'


const NavBar = () => {
    const { 
        setInfoFooter,
        proyects,
        personal,
    } = useContext(ProviderContext);
    const changeFooter = (description) =>{
        let size = 0;
        if(description==='Proyectos'){
            size = proyects.length
        }
        else if (description==='Conocimientos'){
            size = 5
        }
        else if (description==='Sobre Mi'){
            size = personal.length
        }
        else if (description==='Contacto'){
            size = 5
        }
        setInfoFooter({
            size,
            description
        })
    }
    return (
        <nav className='window-nav'>
            <ul className='nav-list'>
                <div className='list-item'>
                    <NavLink to='/' onClick={()=>changeFooter('Inicio')}  
                    >  
                        {({ isActive }) => (
                            <div className='list-item'>
                                <img  className='item-icon' src={home} alt='home'/>
                                <span className={isActive? 'item-icon blue' : 'item-icon blue'}>Inicio</span>
                            </div>
                        )}
                    </NavLink>
                </div>
                <div className='divider'></div>
                <li className='list-item'> 
                    <NavLink to='/me'  onClick={()=>changeFooter('Sobre Mi')}
                    >  
                        {({ isActive }) => (
                            <div className='list-item'>
                                <img className='item-icon' src={isActive ? fileShow : me} alt=''/>
                                <span className={isActive ? 'active' : 'item-title'}>Sobre mi</span>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/knowladges' onClick={()=>changeFooter('Conocimientos')}>
                        {({ isActive }) => (
                            <div className='list-item'>
                                <img className='item-icon' src={isActive ? fileShow : file} alt=''/>
                                <span className={isActive ? 'active' : 'item-title'}>Conocimientos</span>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/proyects' onClick={()=>changeFooter('Proyectos')}>
                        {({ isActive }) => (
                            <div className='list-item'>
                                <img className='item-icon' src={isActive ? fileShow : proyectsFile} alt=''/>
                                <span className={isActive ? 'active' : 'item-title'}>Proyectos</span>
                            </div>
                        )}
                    </NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/contact' onClick={()=>changeFooter('Contacto')}>
                        {({ isActive }) => (
                            <div className='list-item'>
                                <img className='item-icon' src={isActive ? fileShow : contact} alt=''/>
                                <span className={isActive ? 'active' : 'item-title'}>Contacto</span>
                            </div>
                        )}
                    </NavLink>
                </li>
                {/* <div className='divider'></div> */}
            </ul>
        </nav>
    )
}
export { NavBar } 
