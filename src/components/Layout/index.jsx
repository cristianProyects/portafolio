import { NavBar } from '../../components/NavBar'
import { Header } from '../../components/Header'

import './styles.css'
import { useContext } from 'react'
import { ProviderContext } from '../../context/context'

const Layout = ( {children} ) => {
    const { infoFooter } = useContext(ProviderContext)
    return (
        <div className='content'>
            <article className='content-window'>
                <Header />
                <div className='window'>
                    <NavBar />
                    <div className='window-view'>
                        <div className='view-content'>
                            {children}
                        </div>
                        <div className='view-footer'>
                            <p className='footer-count'>{infoFooter.size} elementos </p>
                            <span className='footer-description'>{infoFooter.description}</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export { Layout }