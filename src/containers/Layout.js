import React from "react";

// Estilos 
import "../styles/Layout.css"

// Componentes
import CreditEducat from "../pages/CreditEducat/CreditEducat";
import DatosCredito from "../components/DatosCredito/DatosCredito"
import DatosPerson from "../components/DatosPerson/DatosPerson"

const Layout = () => {
  return (
    <div className="containerpages">
      <CreditEducat/>
      {/* <DatosCredito></DatosCredito> */}
      

      <div className="col-12">

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="DatosCredito">
            <DatosCredito></DatosCredito>
          </div>
          <div role="tabpanel" className="tab-pane " id="DatosPerson">
            <DatosPerson></DatosPerson>
          </div>
        </div>
        <div className="tabpanel"> 
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="opciones active"><a href="#DatosCredito" aria-controls="" data-toggle="tab" role="tab">1</a></li>
            <li role="presentation" className="opciones"><a href="#DatosPerson" aria-controls="" data-toggle="tab" role="tab"></a>2</li>
            <li role="presentation" className="opciones"><a href="#" aria-controls="" data-toggle="tab" role="tab"></a>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
