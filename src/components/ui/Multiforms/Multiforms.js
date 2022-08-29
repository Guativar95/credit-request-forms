import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";


// Estilos 
import "../../../styles/Multiforms.css"

// Componentes



const Layout = ()=>{
    return (
        <footer id="content footer col-12">
            <section className='contenforms  '>
                <div className='formsmulti'>
                    <button className="btn-forms previous" ng-click="steps.previous(toggleTab)" id="prevButton" disabled="">
                    <svg className='btn-forms' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"/></svg>
                    </button>
                </div>

                <div className='formsmulti'>
                    <button className="btn next" ng-click="steps.previous(toggleTab)" id="prevButton" disabled="">
                        <BsArrowRightCircle></BsArrowRightCircle>
                    </button>
                </div>

            </section>
        </footer>
    )  
}


export default Layout;