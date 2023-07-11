import { useContext, useState } from 'react'
import folder from '../../icons/carpeta-conocimientos.svg'
import './styles.css'
import { ProviderContext } from '../../context/context'

const Knowladges = () => {
    const {  setInfoFooter} = useContext(ProviderContext)
    const contetxt = useContext(ProviderContext);
    const [ infromation, setInformation ] = useState(null);
    const [ title, setTitle ] = useState(null);

    const handleClick =  (type , description, title) =>{
        setInformation(contetxt[type]);
        setInfoFooter({
            size: contetxt[type].length,
            description
        })
        setTitle(title);
    }
    return (
        <div className='knowladges'>
            <section className='knowladges-file'>
                <div  className='file' onDoubleClick={()=>handleClick('languages','Conocimientos en lenguajes de programacion','Lenguajes')}>
                    <img className='file-icon' src={folder} alt='' />
                    <p className='file-title'>Lenguajes</p>
                </div>
                <div  className='file'  onDoubleClick={()=>handleClick('frameworks','Conocimientos en frameworks','Frameworks')}>
                    <img className='file-icon' src={folder} alt='' />
                    <p className='file-title'>Frameworks</p>
                </div>
                <div  className='file'  onDoubleClick={()=>handleClick('bd','Conocimientos en bases de datos','Bases de datos')}>
                    <img className='file-icon' src={folder} alt='' />
                    <p className='file-title'>Bases de Datos</p>
                </div>
                <div  className='file'  onDoubleClick={()=>handleClick('tools','Conocimientos en herramientas de desarrollo', 'Herramientas')}>
                    <img className='file-icon' src={folder} alt='' />
                    <p className='file-title'>Herramientas</p>
                </div>
                <div  className='file'  onDoubleClick={()=>handleClick('others','Conocimientos sobre otros aplicativos', 'Otros')}>
                    <img className='file-icon' src={folder} alt='' />
                    <p className='file-title'>Otros</p>
                </div>
            </section>
            <div className='knowladges-divider'>
                <p>{title? title: 'NOTA: Abre una carpete para visualizar su contenido de bajo'}</p>            </div>
            <section className='knowladges-list'>
                {infromation &&
                    (
                        <table className='list-table'>
                            <thead className='table-head'>
                                <th className='head-title'>Icono</th>
                                <th className='head-title'>Nombre</th>
                                <th className='head-title'>Fecha</th>
                                <th className='head-title'>Tipo</th>
                            </thead>
                            {
                                infromation.map( ({icon,alt},index) => (
                                    <tbody className='table-info' key={index}>
                                        <td className={`info-icon ${alt}`}>
                                            <img className='icon' src={icon} alt={alt} />
                                        </td>
                                        <td className='info-name'>{alt}</td>
                                        <td className='info-date'>{new Date().toLocaleString()}</td>
                                        <td className='info-type'>icono</td>
                                    </tbody>
                                ) )
                            }
                            
                        </table>
                    )
                }
            </section>
        </div>
    )
}

export default Knowladges