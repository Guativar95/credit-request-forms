import React from "react";
import "../../styles/AutoDatosPerson.css";

function AutoDatosPerson()  {
  return (
    <div>
        <div clasName="col-12 mt-4">
            <h6 className="AutoDatos">
                Autorización tratamiento de datos personales:
            </h6>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label> Autorizo a Finanzauto S.A BIC a consultarme en <a className="ng-valid ng-empty infotrata" >centrales de riesgo</a> y <a className="ng-valid ng-empty infotrata"> tratar mis datos personales</a> y <a className="ng-valid ng-empty infotrata">fuentes de fondo</a>.</label>
        </div>
    </div>

  );
}

export default AutoDatosPerson;
