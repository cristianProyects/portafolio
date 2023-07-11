import { ProviderContext } from '../../context/context';
import { useContext, useState } from 'react'
import close from '../../icons/close.svg'
import './styles.css'

const InfoModalDetail = (  ) => {
  const { infoModal, modal, setModal } = useContext(ProviderContext);
  const [animation, setAnimation] = useState(false);

  const closeDocument = () =>{
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
      setModal(false);
    }, 900);
  }
  return (
    <>

    {
      modal && 
      (
        <div className={animation?'modal-close':'modal'}>
        <article className='document'>
            <header className='document-header'>
                <div className='header-btn close' onClick={()=>{closeDocument()}}>
                  <img src={close} className='btn-close'/>
                </div>
                <h3 className='header-title'>DOCUMENTO - {infoModal.title}</h3>
            </header>
            <main className='document-content'>
              <div className='content-image'>
                <img className='image-source' src={infoModal.img} alt=''/>
              </div>
              <div  className='content-information'>
                  <h3 className='information-title'>{infoModal.title}</h3>
                  <p className='information-description'>{infoModal.text}</p>
                  <span className='information-type'>
                    <strong>
                      Tipo de proyeto: 
                    </strong>
                    {infoModal.type}.
                  </span>
                  <span className='information-type'>
                    {
                      infoModal.link !='' && (
                        <>
                          <strong>
                            Enlace al proyecto:  
                          </strong>
                          <a href={infoModal.link} target='_blank' rel='noreferrer' className='information-link'>{infoModal.link}</a>
                        </>
                      )
                    }
                  
                  </span>
              </div>
              <div  className='content-knowladges'>
                {
                  infoModal.icons.map( ({alt,icon}, index) => (
                  <div className='knowladges-info' key={index}>
                      <img className={`info-icon ${alt}`} src={icon} alt={alt} />
                      <span className='info-text'>{alt}</span>
                  </div>
                  ))
                }
              </div>
            </main>
        </article>
    </div>
      )
    }

    </>
   
  )
}

export default InfoModalDetail