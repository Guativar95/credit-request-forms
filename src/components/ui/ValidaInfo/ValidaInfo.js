import React from 'react';

function ValidaInfo ()  {
    return (
        <>
        <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Validación de información</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ng-disabled="!Validacion.DatosValidados" disabled="disabled"></button>
                </div>
                <div class="modal-body mx-4" id="ModalAutorizacionBody">
                    <div class="row">
                        <div class="col-12 mb-2 p-0">
                            Enviamos un correo electrónico a:
                            <strong class="ng-binding">brian_951022@hotmail.com</strong>
                            con un código y un mensaje de texto al teléfono
                            <strong class="ng-binding">3103688644</strong>
                            con otro código, por favor ingrese los códigos a continuación.
                        </div>
                        <div class="alert alert-primary d-none" role="alert" id="AlertaOTP">
                        </div>
                        <div class="col-12 mb-2 p-0">
                            <div class="form-floating">
                                <input type="number" class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern" id="CodigoOTP" name="CodigoOTP" placeholder="Ingresa el código de tu correo aquí" ng-model="Validacion.CodigoOTP" ng-pattern="/^([0-9]{6})$/" required=""/>
                                <label for="NumeroCelular">Ingresa el código de tu correo aquí</label>
                            </div>
                            <div class="invalid-feedback d-flex flex-column ng-hide" ng-show="FormValidacionOTP.$submitted || FormValidacionOTP.CodigoOTP.$touched">
                                <span ng-show="FormValidacionOTP.CodigoOTP.$error.required"><i class="fa fa-exclamation-circle"></i> Por favor ingrese el código de validación</span>
                                <span ng-show="FormValidacionOTP.CodigoOTP.$error.pattern" class="ng-hide"><i class="fa fa-exclamation-circle"></i> Por favor ingrese un código valido</span>
                            </div>
                        </div>
                        <div class="col-12 mb-2 p-0">
                            <div class="form-floating">
                                <input type="number" class="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern" id="CodigoSMSOTP" name="CodigoSMSOTP" placeholder="Ingresa el código de tu teléfono aquí" ng-model="Validacion.CodigoSMSOTP" ng-pattern="/^([0-9]{6})$/" required=""/>
                                <label for="CodigoSMSOTP">Ingresa el código de tu teléfono aquí</label>
                            </div>
                            <div class="invalid-feedback d-flex flex-column ng-hide" ng-show="FormValidacionOTP.$submitted || FormValidacionOTP.CodigoSMSOTP.$touched">
                                <span ng-show="FormValidacionOTP.CodigoSMSOTP.$error.required"><i class="fa fa-exclamation-circle"></i> Por favor ingrese el código SMS</span>
                                <span ng-show="FormValidacionOTP.CodigoSMSOTP.$error.pattern" class="ng-hide"><i class="fa fa-exclamation-circle"></i> Por favor ingrese un código valido</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a class="btn btn-outline-fz ng-hide" ng-click="ReenviarOTP()" ng-show="Validacion.OTPInvalida">Reenviar Código</a>
                    <button type="button" class="btn btn-outline-fz" ng-show="!Validacion.DatosValidados" ng-disabled="FormValidacionOTP.$invalid" ng-click="ValidarCodigoOTP()" disabled="disabled">Validar</button>
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" ng-disabled="!Validacion.DatosValidados" disabled="disabled">Cerrar</button>
                </div>
            </div>

        </>
    );
}

export default ValidaInfo; 