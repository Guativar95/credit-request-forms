import React from 'react';
import '../../styles/AutoDatosPerson.css'

const AutoDatosPerson = () => {
    return (
        <div className='containerAutoP'>
            <div className='AutoDataP'>
                <h3 className='titleAutoP'>
                    Autorización tratamiento de datos personales:
                </h3>
                <div className='infoAutoP'>
                    <input className='checkboxAuto' type="checkbox" value="" id="TerminosCondiciones" />
                    <label>Autorizo a Finanzauto S.A BIC a consultarme en <span className='autoLega'>centrales de riesgo</span> y <span className='autoLega'>tratar mis datos personales</span> y <span className='autoLega'>fuentes de fondo</span></label>
                </div>
            </div>
        </div>

    );
};

export default AutoDatosPerson;