import React from "react";
import Header from './datainformation/header';
import Conda from './datainformation/conda';
import Sumberikan from './datainformation/sumberikan';
import Diagram from './datainformation/diagram';
import Analisisdata from "./datainformation/analisisdata";

const Pageinfdat  = () => {
    return(
        <div className="">
             <Header/>
             
             <Analisisdata/>
             <Conda/>
             <Sumberikan/>
             <Diagram/>
           
           
            
        </div>
    );
       
    };
    export default Pageinfdat;