import React from 'react';

const DatosPerson = () => {
    return (
        
        <div className="DataPerson p-2 row">
          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-valid-alphanumeric ng-touched"
                id="PrimerNombre"
                name="PrimerNombre"
                placeholder="Primer Nombre*"
                required=""
              />
              <label for="PrimerNombre">Primer Nombre*</label>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-valid-alphanumeric ng-touched"
                id="SegundoNombre"
                name="PrimerNombre"
                placeholder="Segundo Nombre*"
                required=""
              />
              <label for="PrimerNombre">Segundo Nombre*</label>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-valid-alphanumeric ng-touched"
                id="PrimerNombre"
                name="PrimerNombre"
                placeholder="Primer Nombre*"
                ng-trim="true"
                ng-model="Data.solicitante.PrimerNombre"
                uppercase=""
                alphanumeric=""
                ng-disabled="Validacion.DatosValidados"
                required=""
              />
              <label for="PrimerNombre">Primer Apellido*</label>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <select
                className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-valid-alphanumeric ng-touched"
                id="TipoDocumento"
                name="TipoDocumento"
                aria-label="Tipo de identificación*"
                ng-model="Data.solicitante.TipoDocumento"
                required=""
              >
                <option
                  value="? undefined:undefined ?"
                  selected="selected"
                ></option>
                <option
                  ng-repeat="TipoDocumento in TiposDocumento"
                  ng-value="TipoDocumento.id"
                  className="ng-binding ng-scope"
                  value="string:C"
                >
                  Cédula de Ciudadanía
                </option>
                <option
                  ng-repeat="TipoDocumento in TiposDocumento"
                  ng-value="TipoDocumento.id"
                  className="ng-binding ng-scope"
                  value="string:E"
                >
                  Cédula de Extranjería
                </option>
                <option
                  ng-repeat="TipoDocumento in TiposDocumento"
                  ng-value="TipoDocumento.id"
                  className="ng-binding ng-scope"
                  value="string:N"
                >
                  NIT
                </option>
                <option
                  ng-repeat="TipoDocumento in TiposDocumento"
                  ng-value="TipoDocumento.id"
                  className="ng-binding ng-scope"
                  value="string:I"
                >
                  NUIP
                </option>
              </select>
              <label for="TipoDocumento">Tipo de identificación*</label>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-valid-alphanumeric ng-touched"
                id="PrimerNombre"
                name="PrimerNombre"
                placeholder="Número de identificación*"
                required=""
              />
              <label for="PrimerNombre">Número de identificación*</label>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="date"
                className="form-control ng-pristine ng-empty ng-valid-min ng-valid-max ng-invalid ng-invalid-required ng-touched"
                id="FechaExpedicion"
                name="FechaExpedicion"
                ng-model="Data.solicitante.FechaExpedicion"
                max="2022-08-23"
                min="0001-01-01"
                required=""
              />
              <label for="FechaExpedicion">Fecha de Expedición*</label>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <div className="form-floating">
              <select
                className="form-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                id="DepartamentoID"
                name="DepartamentoID"
                aria-label="Departamento de residencia*"
                ng-model="Data.solicitante.residencia.DepartamentoID"
                ng-change="CargarCiudadesPorDepartamento()"
                required=""
              >
                <option
                  value="? undefined:undefined ?"
                  selected="selected"
                ></option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:91"
                >
                  Amazonas
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:5"
                >
                  Antioquia
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:81"
                >
                  Arauca
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:8"
                >
                  Atlántico
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:11"
                >
                  Bogotá, D.C.
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:13"
                >
                  Bolívar
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:15"
                >
                  Boyacá
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:17"
                >
                  Caldas
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:18"
                >
                  Caquetá
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:85"
                >
                  Casanare
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:19"
                >
                  Cauca
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:20"
                >
                  Cesar
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:27"
                >
                  Chocó
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:23"
                >
                  Córdoba
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:25"
                >
                  Cundinamarca
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:94"
                >
                  Guainía
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:95"
                >
                  Guaviare
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:41"
                >
                  Huila
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:44"
                >
                  La Guajira
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:47"
                >
                  Magdalena
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:50"
                >
                  Meta
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:52"
                >
                  Nariño
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:54"
                >
                  Norte de Santander
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:86"
                >
                  Putumayo
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:63"
                >
                  Quindio
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:66"
                >
                  Risaralda
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:88"
                >
                  San Andrés Prov y S. Cat
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:68"
                >
                  Santander
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:70"
                >
                  Sucre
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:73"
                >
                  Tolima
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:76"
                >
                  Valle del Cauca
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:97"
                >
                  Vaupés
                </option>
                <option
                  ng-repeat="Departamento in Departamentos"
                  ng-value="Departamento.DepartamentoID"
                  className="ng-binding ng-scope"
                  value="number:99"
                >
                  Vichada
                </option>
              </select>
              <label for="DepartamentoID">Departamento de residencia*</label>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <div class="form-floating">
              <select
                class="form-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                id="CiudadID"
                name="CiudadID"
                aria-label="Ciudad de residencia*"
                ng-model="Data.solicitante.residencia.CiudadID"
                required=""
              >
                <option
                  value="? undefined:undefined ?"
                  selected="selected"
                ></option>
              </select>
              <label for="CiudadID">Ciudad de residencia*</label>
            </div>
          </div>
        </div>
    );
};

export default DatosPerson;