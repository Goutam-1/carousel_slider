import React, { useState } from 'react'
import './App.css'


 function Box(props) {
     const a=['../public/i1.jpg','../public/i2.jpg','../public/i3.jpg','../public/i4.jpg','../public/i5.jpg','../public/i6.jpg'] 
       const [i,j]=useState(0);
        function f(){
            j(()=>
            { 

      
            if(i>=5) return(0);
            else  return(i+1);
             
          
          
          }
            )
        }
  return (
    <>
         <div>
          <img src={a[i]} alt='image'/>
         </div>

         <button onClick={f}>CLICK</button>
        
    </>
  )
}


export { Box}