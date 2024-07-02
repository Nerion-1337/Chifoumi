'use client';
// BUILD
import Typo from "#5_components/build/global/typography.tsx";
import Button from "#5_components/build/global/button.tsx";
// TYPE
import { err_type } from "#2_types/typages.tsx";
//
//
//
//
//  
export default function Error({
    error,
    reset,
}: err_type) {
//
//
// BUILD
//
//  
const content = (
<>
<section className="error">
        <Typo 
        size="8" 
        balise="span" 
        color="cb"
        transform="cap"
        children={`Erreur: ${error.message}`}
        />
      <Button
  variant="t1"
  fontSize="s2"
  children="Actualiser la page"
  fonction={()=>reset()}
  />
      </section>
</>
)
//
//
// RETURN
//
//    
    return content;
}