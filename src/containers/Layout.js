import React from "react";
import DatosCredito from '../components/DatosCredito/DatosCredito'

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
      <DatosCredito>

      </DatosCredito>
    </section>
  );
};

export default Layout;
