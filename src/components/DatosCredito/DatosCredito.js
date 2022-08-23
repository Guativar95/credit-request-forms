import React from 'react'
import '../../styles/DatosCredito.css'


function DatosCredito () {
    return (
        <div className='inforDatosC'>
            {/* <FontAwesomeIcon icon="fas fa-credit-card" /> */}
            <h2 className='tituloDatosC'>Datos de tu crédito:</h2>
            <div className='infoCredi'>
                <div className='inputBox '>
                    <input className='inputD' type="number" required="required"></input>
                    <span className='textInput'>¿Cuánto dinero necesitas? 
                    <span className='campoRequerido'>*</span></span>
                </div>
                <div className='inputBox'>
                    <input className='inputD'  type="number" required="required"></input>
                    <span className='textInput'>Plazo *</span>
                </div>
                <div className='inputBox'>
                    <input className='inputD' type="number" required="required"></input>
                    <span className='textInput'>Tu cuota total estimada sin seguros 
                    <span className='campoRequerido'>*</span></span>
                </div>
                <div className='inputBox'>
                    <input className='inputD' disabled></input>
                    <span className='textInput'>Cuota 
                    <span className='campoRequerido'>*</span></span>
                </div>
            </div>
            <button className='btn btn-primary'>as</button>
        </div>
    );
}

export default DatosCredito;