import { useContext } from 'react'
import { ProviderContext } from '../../context/context'
import file from '../../icons/carpeta-proyects.svg'
import './styles.css'
const Proyects = () => {
    const { proyects, setModal, setInfoModal } = useContext(ProviderContext);

    const openDocument = (proyect)=>{
        setModal(true);
        setInfoModal(proyect)

    }
    return (
        <div  className='proyects'>
            <section className='proyects-file' >
            {
                proyects.map((proyect,index) =>(
                        <div  className='file' key={index} onDoubleClick={()=>{openDocument(proyect)}}>
                            <img className='file-icon' src={file} alt='' />
                            <p className='file-title'>{proyect.title}</p>
                        </div>
                ))
            }
            </section>
        </div>
    )
}

export { Proyects }