import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="font-mono uppercase flex space-x-4 tracking-wide bg-gradient-to-r from-green-400 to-blue-500 h-20 mt-96 text-white items-center">
        <div className="flex-1">Sobre Nosotros</div>
        <div className="flex-1">Seguinos en nuestras redes</div>
        <div className="flex-1">Contactanos</div>
      </div>
    </footer>
  );
};

export default Footer;
