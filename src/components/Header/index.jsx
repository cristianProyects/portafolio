import './styles.css'

const Header = () => {
    return (
        <div className='window-header'>
            <div className='header-btn close'></div>
            <div className='header-btn min'></div>
            <div className='header-btn max'></div>
            <h3 className='header-title'>Portafolio</h3>
        </div>
    )
}
export { Header } 
