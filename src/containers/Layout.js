import React from "react";
import DatosCredito from '../components/DatosCredito/DatosCredito'
import AutoDatosPerson from '../components/AutoDatosPerson/AutoDatosPerson'

const Layout = () => {
  return (
    <section className="container">

      <div className="containers">
        <div className='infoCredito'>
          <div class="titleSoli">
            <h1 class="Solicitud">
              Solicitud de <span class="tipoCredito">Crédito Educativo</span>
            </h1>
          </div>
        </div>
        <DatosCredito/>
        <AutoDatosPerson/>
        <button className=""></button>
      </div>
    </section>
  );
};

export default Layout;
