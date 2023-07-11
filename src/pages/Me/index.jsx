import { useContext, useState } from 'react'
import document from '../../icons/document-html.svg'
import './styles.css'
import { ProviderContext } from '../../context/context'

const Me = () => {
    const {personal} = useContext(ProviderContext);
    const [preview, setPreview] = useState(null);

    const setInformation = (info) =>{
        setPreview(info);
    }
    return (
        <div className='me'>
            <div className='me-files'>
                <section className='me-list'>
                    <table className='list-table'>
                        <tr className='table-head'>
                            <th className='head-title'></th>
                            <th className='head-title'>Nombre</th>
                            <th className='head-title'>Fecha</th>
                            <th className='head-title'>Tipo</th>
                        </tr>
                        {
                            personal.map((info,index)=>(
                                <tr className='table-info pointer' key={index} onClick={()=>setInformation(info)}>
                                    <td className='info-icon'>
                                        <img className='icon' src={document} alt='documento' />
                                    </td>
                                    <td className='info-name'>{info.title}</td>
                                    <td className='info-date'>{new Date().toLocaleString()}</td>
                                    <td className='info-type'>Documento HTML</td>
                                </tr>
                            ))
                        }
                    </table>
                </section>
            </div>
            <div className='me-file-preview'>
                <p className='preview-title'>Panel de vista previa</p>
                    {
                        preview && (
                            <div className='preview-content'>
                                <h3 className='content-title'>{preview.title}</h3>
                                <p className='content-paragraph'>
                                    {preview.content.paragraph}
                                </p>
                                <ul className='content-list'>
                                    {preview.content.list.map(list => (
                                        <li className='list-item dot'>
                                            -{list}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Me