import React, { forwardRef } from 'react';

const AboutSection = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='container-fluid my-5 dotted-border'>
      <div className="abt-me-bg min-h-700">
        <div className="abt-me-tablet">
          <h2 className='fw-bold text-uppercase text-black primary-titles'>
            //01 - <br /> About
          </h2>
        </div>
        <h5 className='main-red fw-bold fs-3 my-4'>
          Jr. Full Stack Web Developer && Graphic Designer
        </h5>
        <div className='col-12 col-lg-7 row g-4'>
          <p className='col-12 col-md-6'>
            Da sempre appassionato di comunicazione, arte, design e tecnologia.
            Dai tempi della scuola iniziano i miei primi contatti col mondo della grafica,
            del cinema e della progettazione web. Nel 2018 inizia la mia carriera universitaria
            come Graphic Designer. Dopo la laurea continuo ad approfondire i miei studi,
            sia in ambito di UX/UI design,
          </p>
          <p className='col-12 col-md-6'>
            sia in ambito dello sviluppo web tramite Boolean, facendomi appassionare sempre di più
            a questo mondo giorno dopo giorno. Sono una persona fortemente determinata e volenterosa,
            aperta a nuove opportunità e pronta a mettersi in gioco.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutSection;

