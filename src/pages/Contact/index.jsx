import React from 'react'
import phone  from '../../icons/phone.svg'
import location  from '../../icons/location.svg'
import email  from '../../icons/email.svg'
import linkedin  from '../../icons/linkedin.svg'
import whatsapp  from '../../icons/whatsapp.svg'
import './styles.css'

const Contact = () => {

    const redirect = (url) =>{
        window.open(url, '_blank');
    }

    return (
        <div  className='contact'>
        <section className='contact-file' >
            <div  className='file' >
                <img className='file-icon' src={email} alt='email' onDoubleClick={()=>{redirect('mailto:crisespiridion405@gmail.com')}}/>
                <p className='file-title'>crisespiridion
                405@gmail.com</p>
            </div>
            <div  className='file' >
                <img className='file-icon' src={location} alt='location' />
                <p className='file-title'>Atlacomulco, Estado de Mexico</p>
            </div>
            <div  className='file' >
                <img className='file-icon' src={phone} alt='phone' onDoubleClick={()=>{redirect('tel:+527122517890')}}/>
                <p className='file-title'>+52 7122517890</p>
            </div>
            <div  className='file' >
                <img className='file-icon' src={whatsapp} alt='whatsapp' onDoubleClick={()=>{redirect('https://wa.me/7122517890')}}/>
                <p className='file-title'>+52 7122517890</p>
            </div>
            <div  className='file' >
                <img className='file-icon' src={linkedin} alt='linkedin' onDoubleClick={()=>{redirect('https://www.linkedin.com/in/cristian-espiridion-mart%C3%ADnez-8056a6246')}}/>
                <p className='file-title'>Cris Espiridion</p>
            </div>
        </section>
    </div>
    )
}

export default Contact