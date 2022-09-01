import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

//Componentes
import CentralesR from "../ui/AutoTrataP/CentralesR"

import "../../styles/AutoDatosPerson.css";

function AutoDatosPerson()  {
  const [showA, setShowA] = useState(true);
    
  
  const toggleShowA = () => setShowA(!showA);

  return (
    
    <div>
        <div clasName="col-12 mt-4 mb3">
            <h6 className="AutoDatos">
                Autorización tratamiento de datos personales:
            </h6>
        </div>
        <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" />
            <label> Autorizo a Finanzauto S.A BIC a consultarme en <a className="ng-valid ng-empty infotrata" src={CentralesR} >centrales de riesgo</a> y <a className="ng-valid ng-empty infotrata"> tratar mis datos personales</a> y <a className="ng-valid ng-empty infotrata">fuentes de fondo</a>.</label>
        </div>
    </div>

  );
}

export default AutoDatosPerson;
