import React from "react";
import "../../styles/DatosCredito.css";


//Componentes 
import AutoDatosPerson from "../AutoDatosPerson/AutoDatosPerson"

function DatosCredito() {
  return (
    <div className="SeccionCredito p-2 row">
      <h4 className="section-title my-3">
      <svg  id="creditcard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"/></svg>
        Datos de tu crédito:
      </h4>
      <div class="col-12 col-md-6 mb-3">
        <div class="form-floating">
          <input
            type="text"
            class="form-control ng-pristine ng-invalid ng-invalid-required ng-invalid-min ng-valid-max ng-valid-fraction ng-invalid-integer ng-touched"
            id="CantidadSolicitada"
            name="CantidadSolicitada"
            placeholder="¿Cuánto dinero necesitas?*"
            ng-change="getFees()"
            currency-symbol="$"
            fraction="0"
            ng-currency=""
            min="0"
            hard-cap="true"
            ng-model="Data.detalleSolicitud.CantidadSolicitada"
            only-digits=""
            integer=""
            required=""
          />
          <label for="CantidadSolicitada">¿Cuánto dinero necesitas?*</label>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-3">
        <div class="form-floating">
          <select
            class="form-select ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
            id="Plazo"
            name="Plazo"
            aria-label="Plazo"
            ng-model="Data.detalleSolicitud.Plazo"
            ng-change="getFees()"
            required=""
          >
            <option
              value="? undefined:undefined ?"
              selected="selected"
            ></option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:1"
            >
              1
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:2"
            >
              2
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:3"
            >
              3
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:4"
            >
              4
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:5"
            >
              5
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:6"
            >
              6
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:7"
            >
              7
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:8"
            >
              8
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:9"
            >
              9
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:10"
            >
              10
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:11"
            >
              11
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:12"
            >
              12
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:13"
            >
              13
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:14"
            >
              14
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:15"
            >
              15
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:16"
            >
              16
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:17"
            >
              17
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:18"
            >
              18
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:19"
            >
              19
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:20"
            >
              20
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:21"
            >
              21
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:22"
            >
              22
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:23"
            >
              23
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:24"
            >
              24
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:25"
            >
              25
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:26"
            >
              26
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:27"
            >
              27
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:28"
            >
              28
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:29"
            >
              29
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:30"
            >
              30
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:31"
            >
              31
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:32"
            >
              32
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:33"
            >
              33
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:34"
            >
              34
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:35"
            >
              35
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:36"
            >
              36
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:37"
            >
              37
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:38"
            >
              38
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:39"
            >
              39
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:40"
            >
              40
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:41"
            >
              41
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:42"
            >
              42
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:43"
            >
              43
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:44"
            >
              44
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:45"
            >
              45
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:46"
            >
              46
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:47"
            >
              47
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:48"
            >
              48
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:49"
            >
              49
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:50"
            >
              50
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:51"
            >
              51
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:52"
            >
              52
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:53"
            >
              53
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:54"
            >
              54
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:55"
            >
              55
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:56"
            >
              56
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:57"
            >
              57
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:58"
            >
              58
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:59"
            >
              59
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:60"
            >
              60
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:61"
            >
              61
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:62"
            >
              62
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:63"
            >
              63
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:64"
            >
              64
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:65"
            >
              65
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:66"
            >
              66
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:67"
            >
              67
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:68"
            >
              68
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:69"
            >
              69
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:70"
            >
              70
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:71"
            >
              71
            </option>
            <option
              ng-value="Plazos[$index]"
              ng-repeat="Plazo in Plazos"
              class="ng-binding ng-scope"
              value="number:72"
            >
              72
            </option>
          </select>
          <label for="Plazo">Plazo</label>
        </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
            <p>Tu cuota total estimada sin seguros.</p>
        </div>
        <div class="col-12 col-md-6 mb-3">
            <div class="form-floating">
                <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-min ng-valid-max ng-valid-fraction" id="CuotaEstimada" name="CuotaEstimada" placeholder="Cuota Estimada" currency-symbol="$" fraction="0" ng-currency="" min="0" hard-cap="true" ng-model="Data.detalleSolicitud.CuotaEstimada" only-digits="" disabled="" />
                <label>Cuota</label>
            </div>
        </div>
        <AutoDatosPerson/>
    </div>
  );
}

export default DatosCredito;
