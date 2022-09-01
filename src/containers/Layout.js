import React, { useState, useEffect } from 'react';


// Estilos 
import "../styles/Layout.css"

// Componentes
import CreditEducat from "../pages/CreditEducat/CreditEducat";
import DatosCredito from "../components/DatosCredito/DatosCredito"
import DatosPerson from '../components/DatosPerson/DatosPerson';
import DatosResid from '../components/DatosResid/DatosResid';
import DatosLabo from '../components/DatosLabo/DatosLabo'
import Multifors from '../components/ui/Multiforms/Multiforms'


const Layout = ()=>{
  const {useState} = React;
  const [step,setStep] = useState(0);
  const [hideButton,setHideButton] = useState(0);
  
  const step_form = step+1;
  
  const Form = ()=>{
  
  if(step==0){
  
  return (
  <InfoCredit /> );
  
  }else if(step==1){
  
  return (
  <InfoContact /> );
  
  }else if(step==2){
  
  return (
  <InfoResid /> );
  
  }else if(step==3){
  
  return (
  <InfoLabo /> );
  }
  }
  const InfoCredit = () =>{
  
  return (
  <div >
    <CreditEducat>
    </CreditEducat>
    <DatosCredito/>
    <div className="footer">
          
          <button className="btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>


  </div>
  );
  }
  
  
  const InfoContact = () =>{
  
  return (
  <>
    <CreditEducat>
    </CreditEducat>
    <DatosPerson/>
    <div className="footer">
          <button className="  btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>

  </>
  );
  }
  
  
  const InfoResid = () =>{
  
  return (
  <>
    <CreditEducat>
    </CreditEducat>
    <DatosResid/>
      <div className="footer">
          <button className="btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>
  </>
  );
  }
  
  
  const InfoLabo = () =>{
  
  return (
    <>
    <CreditEducat>
    </CreditEducat>
    <DatosLabo/>
      <div className="footer">
          <button className="btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>
  </>
  );
  }
  
  
  
  
  return (
  
  <>
      <div class="form">
          <div>
              <div>{
                  <Form />}</div>
          </div>
      </div>
  </>
  );
  
}


export default Layout;







