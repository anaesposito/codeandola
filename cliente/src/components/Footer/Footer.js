import React from "react";
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-2">
      <div className="container mx-auto text-center">
      <div className="font-mono uppercase text-2xl flex justify-center space-x-4 bg-gradient-to-r from-green-400 to-blue-500 h-32 text-white">
        <div className="flex-1">Sobre Nosotros</div>
        <div className="flex-1">Seguinos en nuestras redes
        <div className="flex text-4xl space-x-36">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        </div>
        </div>
        <div className="flex-1">Contactanos</div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
