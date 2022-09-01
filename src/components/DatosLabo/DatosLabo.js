import React from 'react'
import '../../styles/DatosLabo.css'


const DatosLabo = () => {
    return (
      <div className="DataPerson p-2 row">
        <div class="tab" data-index="2">
            <fieldset class="row">
                <h4 class="section-title my-3">
                <svg id="creditcard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/></svg>
                    Datos de laborales:</h4>
                <div class="col-12 col-md-6 mb-3">
                    <div class="form-floating">
                        <select class="form-select ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" id="OcupacionID" name="OcupacionID" aria-label="Ocupación*" ng-model="Data.solicitante.OcupacionID" required=""><option value="? undefined:undefined ?" selected="selected"></option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:1">Agricultor</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:2">Ama de casa         </option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:3">Comerciante</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:4">Contratista</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:5">Empleado ENR</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:6">Empleado ER</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:7">Ganadero</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:8">Independ. Informal</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:9">Independiente Formal</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:10">Pensionado          </option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:11">Rentista de Capital </option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:12">Transportador</option>
                            <option ng-repeat="Ocupacion in Ocupaciones" ng-value="Ocupacion.OcupacionID" class="ng-binding ng-scope" value="number:13">Universitario       </option>
                        </select>
                        <label for="OcupacionID">Ocupación*</label>
                    </div>
                    
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <div class="form-floating">
                        <select class="form-select ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" id="NivelEducativo" name="NivelEducativo" aria-label="Ocupación*" ng-model="Data.solicitante.solicitanteDetalle.NivelEducativoID" required=""><option value="? undefined:undefined ?" selected="selected"></option>
                            <option ng-repeat="NivelEducativo in NivelesEducativos" ng-value="NivelEducativo.NivelEducativoID" class="ng-binding ng-scope" value="number:1">Primaria</option>
                            <option ng-repeat="NivelEducativo in NivelesEducativos" ng-value="NivelEducativo.NivelEducativoID" class="ng-binding ng-scope" value="number:2">Bachillerato</option>
                            <option ng-repeat="NivelEducativo in NivelesEducativos" ng-value="NivelEducativo.NivelEducativoID" class="ng-binding ng-scope" value="number:3">Técnico</option>
                            <option ng-repeat="NivelEducativo in NivelesEducativos" ng-value="NivelEducativo.NivelEducativoID" class="ng-binding ng-scope" value="number:4">Universitario</option>
                            <option ng-repeat="NivelEducativo in NivelesEducativos" ng-value="NivelEducativo.NivelEducativoID" class="ng-binding ng-scope" value="number:5">Postgrado</option>
                            <option ng-repeat="NivelEducativo in NivelesEducativos" ng-value="NivelEducativo.NivelEducativoID" class="ng-binding ng-scope" value="number:6">Ninguno</option>
                            
                        </select>
                        <label for="NivelEducativo">Nivel educativo *</label>
                    </div>
                   
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-invalid-min ng-valid-max ng-valid-fraction" id="TotalIngresosMensuales" name="TotalIngresosMensuales" placeholder="Total de ingresos mensuales*" currency-symbol="$" fraction="0" ng-currency="" min="0" hard-cap="true" ng-model="Data.solicitante.solicitanteDetalle.TotalIngresosMensuales" only-digits="" required=""/>
                        <label for="TotalIngresosMensuales">Total de ingresos (al mes)*</label>
                    </div>
                   
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-invalid-min ng-valid-max ng-valid-fraction" id="TotalGastosMensuales" name="TotalGastosMensuales" placeholder="Total de gastos mensuales*" currency-symbol="$" fraction="0" ng-currency="" min="0" hard-cap="true" ng-model="Data.solicitante.solicitanteDetalle.TotalGastosMensuales" only-digits="" required="" />
                        <label for="TotalGastosMensuales">Total de gastos mensuales*</label>
                    </div>
                </div>
            </fieldset>
            <fieldset class="row mt-4">
                <h4 class="section-title my-3">
                <svg id="creditcard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M218.3 8.486C230.6-2.829 249.4-2.829 261.7 8.486L469.7 200.5C476.4 206.7 480 215.2 480 224H336C316.9 224 299.7 232.4 288 245.7V208C288 199.2 280.8 192 272 192H208C199.2 192 192 199.2 192 208V272C192 280.8 199.2 288 208 288H271.1V416H112C85.49 416 64 394.5 64 368V256H32C18.83 256 6.996 247.9 2.198 235.7C-2.6 223.4 .6145 209.4 10.3 200.5L218.3 8.486zM336 256H560C577.7 256 592 270.3 592 288V448H624C632.8 448 640 455.2 640 464C640 490.5 618.5 512 592 512H303.1C277.5 512 255.1 490.5 255.1 464C255.1 455.2 263.2 448 271.1 448H303.1V288C303.1 270.3 318.3 256 336 256zM352 304V448H544V304H352z"/></svg> Datos de tus bienes:</h4>
                <div>
                    <div class="row mt-3 ng-scope" ng-repeat="bien in bienes">
                        <div class="col-12 col-md-6 mb-3">
                            <div class="form-floating">
                                <select class="form-select ng-pristine ng-untouched ng-valid ng-empty ng-valid-required" id="TipoBien0" name="TipoBien0" aria-label="Tipo de Bien" ng-model="tmp.listaBienes[bien].TipoBienID" ng-required="subForm2['ValorBien' + bien].$viewValue"><option value="? undefined:undefined ?" selected="selected"></option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:1">APARTAMENTO</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:2">CASA</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:3">FINCA</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:4">BODEGA</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:5">LOCAL</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:6">LOTE</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:7">OFICINA</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:8">PARQUEADERO</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:9">VEHÍCULO</option>
                                    <option ng-repeat="TipoBien in TiposBienes" ng-value="TipoBien.TipoBienID" class="ng-binding ng-scope" value="number:10">MOTOCICLETA</option>
                                    
                                </select>
                                <label for="TipoBien0">Tipo de Bien</label>
                            </div>
                            
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <div class="form-floating">
                                <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-min ng-valid-max ng-valid-fraction" id="ValorBien{bien}}" name="ValorBien0" placeholder="Valor del Bien *" currency-symbol="$" fraction="0" ng-currency="" min="0" hard-cap="true" ng-model="tmp.listaBienes[bien].Valor" only-digits="" integerornull="" />
                                <label for="ValorBien0">Valor del Bien</label>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div>

                </div>
            </fieldset>
        
            <div class="col-12 contenedormovi p-2 mb-3">
                <div class=" col-12 col-md-12 mb-3 movimientos-intern ">
                    <div class="card-header ">
                        <p class="col-12 col-md-12 mb-1">¿Realizas operaciones internacionales?</p>
                        <div class="" role="group">

                            <input type="radio" class="btn-check   ng-untouched ng-empty ng-invalid ng-invalid-required" name="OperacionesInternacionales" id="OpcionSiOPeraciones" ng-value="1" ng-model="Data.solicitante.solicitanteDetalle.OperacionesInternacionales" autocomplete="off" required="" value="1"/>
                            <labe class="btn btn-outline-fz" for="OpcionSiOPeraciones" >SI </labe>

                            <input type="radio" class="btn-check  ng-untouched ng-empty ng-invalid ng-invalid-required" name="OperacionesInternacionales" id="OpcionNoOPeraciones" ng-value="0" ng-model="Data.solicitante.solicitanteDetalle.OperacionesInternacionales" autocomplete="off" required="" value="0"/>
                            <label class="btn btn-outline-fz" for="OpcionNoOPeraciones">NO </label>
                        </div>
                        
                    </div>
                    <ng-form name="subFormOpInt" class=" ng-valid">

                    </ng-form>
                </div>
            </div>
        </div>

    </div>
    );
}

export default DatosLabo;