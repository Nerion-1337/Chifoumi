// COMPONENTS
import { setErreur, setValid } from "#5_components/valid_input.tsx";
// DATA
import { Route_Server } from "#3_data/links.tsx";
// TYPAGE
import { typeString } from "#2_types/typages.tsx";
//
//
// TOKEN
//
//
export function token_valid(): Promise<boolean>{
    return fetch(`${Route_Server[0].url}${Route_Server[2].url}`, {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           Authorization: `${localStorage.getItem("token_chifoumi")}`,

         },
       })
         .then((res) => res.json())
         .then((res) => {          
           if (res.error_token) {
             return false
           } else {
             return true
           }
         })
         .catch((err) => {
           console.log(err);
           return false
         });
 }