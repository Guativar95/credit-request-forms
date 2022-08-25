import React, { useState, useEffect } from 'react';

// Estilos 
import "../styles/Layout.css"

// Componentes
import CreditEducat from "../pages/CreditEducat/CreditEducat";
import DatosCredito from "../components/DatosCredito/DatosCredito"
import DatosPerson from '../components/DatosPerson/DatosPerson';
import DatosResid from '../components/DatosResid/DatosResid';



const Layout = ()=>{
  const {useState} = React;
  const [step,setStep] = useState(0);
  const [hideButton,setHideButton] = useState(0);
  
  const step_form = step+1;
  
  const Form = ()=>{
  
  if(step==0){
  
  return (
  <Login /> );
  
  }else if(step==1){
  
  return (
  <Contact /> );
  
  }else if(step==2){
  
  return (
  <Social /> );
  
  }else if(step==3){
  
  return (
  <Welcome /> );
  }
  }
  const Login = () =>{
  
  return (
  <>
    <CreditEducat>
   
    </CreditEducat>
    <DatosCredito/>
    <div className="footer">
          <button className="btnform  btn btn-outline-fz btn-lg mt-3 rounded-pill" disabled onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btnform btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>
  </>
  );
  }
  
  
  const Contact = () =>{
  
  return (
  <>
    <CreditEducat>
    </CreditEducat>
    <DatosPerson/>
    <div className="footer">
          <button className="btnform  btn btn-outline-fz btn-lg mt-3 rounded-pill"  onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btnform btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>
  </>
  );
  }
  
  
  const Social = () =>{
  
  return (
  <>
    <CreditEducat>
    </CreditEducat>
    <DatosResid/>
      <div className="footer">
          <button className="btnform  btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btnform btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>
  </>
  );
  }
  
  
  const Welcome = () =>{
  
  return (
  <>
    <div className="footer">
          <button className="btnform  btn btn-outline-fz btn-lg mt-3 rounded-pill"  onClick={()=>{setStep(step-1)}}>Previous</button>
          <button className="btnform btn btn-outline-fz btn-lg mt-3 rounded-pill" onClick={()=>{setStep(step+1)}}>Next</button>
      </div>
  </>
  );
  }
  
  
  
  
  return (
  
  <>
      <div class="form">
          <div className="card">
              <div>{
                  <Form />}</div>
          </div>
      </div>
  </>
  );
  
}


export default Layout;







