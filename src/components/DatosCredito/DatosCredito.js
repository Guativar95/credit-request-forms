import React from 'react'
import '../../styles/DatosCredito.css'

function DatosCredito () {
    return (
        <form className='inforDatosC'>
            <h2 className='tituloDatosC'>Datos de tu crédito:</h2>
            <div className='infoCredi'>
                <div className='inputBox'>
                    <input className='inputD' required="required"></input>
                    <labe className='textInput'>¿Cuánto dinero necesitas? 
                    <span className='campoRequerido'>*</span></labe>
                </div>
                <div className='inputBox'>
                    <input className='inputD' required="required"></input>
                    <labe className='textInput'>Plazo 
                    <span className='campoRequerido'>*</span></labe>
                </div>
                <div className='inputBox'>
                    <input className='inputD' required="required"></input>
                    <labe className='textInput'>Tu cupta total estimada sin seguros 
                    <span className='campoRequerido'>*</span></labe>
                </div>
                <div className='inputBox'>
                    <input className='inputD' required="required"></input>
                    <labe className='textInput'>Cuota 
                    <span className='campoRequerido'>*</span></labe>
                </div>
            </div>
        </form>
    );
}

export default DatosCredito;