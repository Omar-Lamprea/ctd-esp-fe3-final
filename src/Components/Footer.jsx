import React from 'react'
import Facebook from '../Assets/icons8-facebook-48.png'
import Instagram from '../Assets/icons8-instagram-48.png'
import Tiktok from '../Assets/icons8-tik-tok-48.png'
import WhatsApp from '../Assets/icons8-whatsapp-48.png'


const Footer = () => {
  return (
    <footer>
      <div className="logoDh">
        <p>Powered by</p>
        <img width={200} src="/images/DH.png" alt='DH-logo' />
      </div>
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer">
            <img src={Tiktok} alt="" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={WhatsApp} alt="" />
          </a>
        </div>
    </footer>
  )
}

export default Footer
