import React from 'react'


const DatosResid = () => {
    return (
      <div className="DataPerson p-2 row">
        <div className="col-12 col-md-12 mb-3">
            <div className="form-floating">
              <input
                type="date"
                className="form-control ng-pristine ng-empty ng-valid-min ng-valid-max ng-invalid ng-invalid-required ng-touched"
                id="FechaNacimiento"
                name="FechaNacimiento"
                ng-model="Data.solicitante.FechaNacimiento"
                max="2022-08-23"
                min="0001-01-01"
                required=""
              />
              <label for="FechaNacimiento">Fecha de Nacimiento*</label>
            </div>
          </div>
          <div className="col-12 col-md-12 mb-3">
                    <div className="form-floating">
                        <input type="number" className="form-control ng-pristine ng-valid ng-empty ng-valid-min ng-valid-pattern ng-touched" id="Telefono" name="Telefono" min="0" placeholder="Numero de Teléfono" ng-model="Data.solicitante.Telefono" ng-pattern="/^[2-9]\d{2}[2-9]\d{2}\d{4}$/"/>
                        <label for="Telefono">Numero de Teléfono</label>
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <div className="form-floating">
                        <select className="form-select ng-touched ng-not-empty ng-dirty ng-valid-parse ng-valid ng-valid-required" id="PersonasACargo" name="PersonasACargo" aria-label="PersonasACargo" ng-model="Data.solicitante.solicitanteDetalle.PersonasACargo" required="">
                            <option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:0">Ninguna</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:1">1</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:2">2</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:3">3</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:4">4</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:5">5</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:6">6</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:7">7</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:8">8</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:9">9</option><option ng-value="PersonasACargo[$index]" ng-repeat="PersonaACargo in PersonasACargo" className="ng-binding ng-scope" value="number:10">10</option>
                        </select>
                        <label for="PersonasACargo">Personas a tu Cargo</label>
                    </div>
                </div>
        

                <div className="col-12 mb-3 mt-2">
                    <h4 className="section-title my-3">
                        <svg id="creditcard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
                        <i className="fas fa-home"></i> Datos de Residencia:
                    </h4>
                    <div className="option-resid btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input ng-repeat-start="TipoVivienda in TiposVivienda" type="radio" className=" btn-check ng-scope ng-not-empty ng-dirty ng-valid ng-valid-required ng-touched ng-valid-parse" id="TipoResidencia1" name="TipoResidenciaID" ng-value="TipoVivienda.TipoResidenciaID" ng-model="Data.solicitante.residencia.TipoResidenciaID" autocomplete="off" required="" checked="" value="1"/>
                        <label ng-repeat-end="" className=" btn btn-outline-fz ng-binding ng-scope" for="TipoResidencia1">PROPIA</label><input ng-repeat-start="TipoVivienda in TiposVivienda" type="radio" className="btn-check ng-scope ng-not-empty ng-valid ng-valid-required ng-dirty ng-touched" id="TipoResidencia2" name="TipoResidenciaID" ng-value="TipoVivienda.TipoResidenciaID" ng-model="Data.solicitante.residencia.TipoResidenciaID" autocomplete="off" required="" checked="" value="2"/>
                        <label ng-repeat-end="" className="btn btn-outline-fz ng-binding ng-scope" for="TipoResidencia2">ARRENDADA</label><input ng-repeat-start="TipoVivienda in TiposVivienda" type="radio" className="btn-check ng-scope ng-not-empty ng-valid ng-valid-required ng-dirty ng-touched" id="TipoResidencia3" name="TipoResidenciaID" ng-value="TipoVivienda.TipoResidenciaID" ng-model="Data.solicitante.residencia.TipoResidenciaID" autocomplete="off" required="" checked="" value="3"/>
                        <label ng-repeat-end="" className="btn btn-outline-fz ng-binding ng-scope" for="TipoResidencia3">FAMILIAR</label><input ng-repeat-start="TipoVivienda in TiposVivienda" type="radio" className="btn-check ng-scope ng-not-empty ng-valid ng-valid-required ng-dirty ng-touched" id="TipoResidencia4" name="TipoResidenciaID" ng-value="TipoVivienda.TipoResidenciaID" ng-model="Data.solicitante.residencia.TipoResidenciaID" autocomplete="off" required="" checked="" value="4"/>
                        <label ng-repeat-end="" className="btn btn-outline-fz ng-binding ng-scope" for="TipoResidencia4">OTRA</label>
                    </div>
                </div>

                <div className="col-12 mb-3">
                    <div class="form-floating">
                        <select class="form-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" id="Estrato" name="Estrato" aria-label="Estrato" ng-model="Data.solicitante.residencia.Estrato" required=""><option value="? undefined:undefined ?" selected="selected"></option>
                            <option ng-value="Estratos[$index]" ng-repeat="Estrato in Estratos" class="ng-binding ng-scope" value="number:1">1</option><option ng-value="Estratos[$index]" ng-repeat="Estrato in Estratos" class="ng-binding ng-scope" value="number:2">2</option><option ng-value="Estratos[$index]" ng-repeat="Estrato in Estratos" class="ng-binding ng-scope" value="number:3">3</option><option ng-value="Estratos[$index]" ng-repeat="Estrato in Estratos" class="ng-binding ng-scope" value="number:4">4</option><option ng-value="Estratos[$index]" ng-repeat="Estrato in Estratos" class="ng-binding ng-scope" value="number:5">5</option>
                        </select>
                        <label for="Estrato">Estrato</label>
                    </div>
                </div>

                <div class="col-12 mb-3 mt-2">
                    <div class="form-floating">
                        <input type="text" class="form-control ng-touched ng-dirty ng-valid-parse ng-empty ng-invalid ng-invalid-required" id="DireccionResidencia" name="DireccionResidencia" placeholder="Dirección de Residencia" ng-model="Data.solicitante.residencia.Direccion" uppercase="" required="" />
                        <label for="DireccionResidencia">Dirección de Residencia</label>
                    </div>

                </div>

    </div>
    );
}

export default DatosResid;