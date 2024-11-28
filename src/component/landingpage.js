import React from "react";
import Side1  from "./page/Side1";
import Manfaat  from "./page/manfaat";
import Keunggulan from "./page/pageunggul";
import Pagelampung from "./page/lampung";




const landingpage  = () => {
    return(
        <div className="">
             <Side1/>
             <Pagelampung/>
             <Keunggulan/>
             <Manfaat/>
             
             
        </div>
    );
       
    };
    export default landingpage;