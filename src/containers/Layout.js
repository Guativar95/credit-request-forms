import React from "react";
import DatosCredito from '../components/DatosCredito/DatosCredito'
import AutoDatosPerson from '../components/AutoDatosPerson/AutoDatosPerson'

const Layout = () => {
  return (
    <section>
      <div className='infoCredito'>
        <div class="text-center">
          <h1 class="Solicitud">
            Solicitud de <span class="tipoCredito">Crédito Educativo</span>
          </h1>
        </div>
      </div>
      <DatosCredito/>
      <AutoDatosPerson/>
    </section>
  );
};

export default Layout;
