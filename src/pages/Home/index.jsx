import photoMe from '../../image/foto.jpeg'
import './styles.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-presentation'>
                <img className='presentation-image' src={photoMe} alt='Mi foto' />
                <h2 className='presentation-name'>CRISTIAN ESPIRIDION MARTINEZ</h2>
                <p className='presentation-description'>" Me apasiona el mundo del  desarrollo web y  mi objetivo principal es especializar me  en el  backend "</p>
            </div>
            <div className='presentation-instructions'>
                <h4 className='intructions-title'> Instrucciones para la visualizacion adeucuada dentro de mi portafolio</h4>
                <p className='instructions-paragraph'>Es un gusto tenerte en mi portafolio, la tematica principal es simular el explorador  de windows y asi poder visualizar la informacion que requieras. Buen dia y disfruta de conocer mas sobre mi.</p>
                <ul className='instructions-list'>
                    <li className='list-item'>
                        - Recuerda que para abrir carpetas es con doble click y de la misma manera los archivos
                    </li>
                    <li className='list-item'>
                        - Existe un apartado que tiene una  visualizacion previa, recuerda que con  un click en el archivo puedes observar su contenido sin abrir el documento
                    </li>
                </ul>
            </div>
        </div>
    )
    }

export default Home