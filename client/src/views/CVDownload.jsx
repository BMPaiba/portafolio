import React from 'react';
import CV from '../../assets/Brian-Paiba.pdf';
const CVDownload = () => {
  return (
    <div>
      <h1>Mi CV</h1>
      <a href={CV} download>Descargar CV</a>
    </div>
  );
};

export default CVDownload;