// REACT
import React from 'react';
import { createRoot } from 'react-dom/client';
//
//
//
//
//
// AFFICHE ERREUR DANS INPUT
export function setErreur(input: string, message: React.ReactNode) {
  const formInput = document.querySelector(`.${input}`);
  if (formInput) {
    const small = formInput.querySelector("small");
    if (small) {
      const root = createRoot(small);
      root.render(<>{message}</>);
      formInput.classList.add("error_input");
    }
  }
}
 //
 // SUPPRIME ERREUR DANS INPUT
 export function setValid(input: string) {
    const formInput = document.querySelector(`.${input}`);
    if(formInput){
     const small = formInput.querySelector("small");
  
     if (small)
    small.innerText = "";
    formInput.classList.remove("error_input"); 
    }
    
  }