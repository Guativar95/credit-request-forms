import React from 'react';


function CentralesR () {
    return (
        <>
        <div class="modal-content" style="background-color: var(--VerdeOscuro); color: white; ">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="ModalAutorizacionTitle">Autorización de consulta y reporte a operadores bases de datos</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-4 border-0" id="ModalAutorizacionBody">Autorizo de forma irrevocable para que en todo tiempo Finanzauto S.A BIC o a quien represente sus derechos u ostente en el futuro la calidad de acreedor, consulte mis datos personales, crediticios, comerciales ante cualquier operador de base de datos o central de riesgo, además de mis hábitos de pago y cumplimiento de mis obligaciones. Así mismo, para que informe y reporte a dichas entidades el comportamiento de pago de mis obligaciones crediticias, o de mis deberes legales de contenido patrimonial, respecto a todas las operaciones que bajo cualquier modalidad haya celebrado o llegue a celebrar con Finanzauto S.A BIC o respecto de obligaciones a mi cargo cuyo acreedor o a cualquiera que detente sus derechos sea Finanzauto S.A BIC, de tal forma que aquellas entidades presenten una información veraz, pertinente, completa actualizada y exacta de mi desempeño como deudor, codeudor o avalista.</div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-outline-fz-light" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
        </>
    );
}

export default CentralesR;