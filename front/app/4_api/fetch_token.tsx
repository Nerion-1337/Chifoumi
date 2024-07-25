// DATA
import { Route_Server } from "#3_data/links.tsx";
// TYPAGE
import { tokenValid } from "#2_types/typages.tsx";
//
//
// TOKEN
//
//
export function token_valid({name, score}: tokenValid): Promise<boolean>{
    return fetch(`${Route_Server[0].url}${Route_Server[2].url}`, {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           authorization: `${localStorage.getItem("token_chifoumi")}`,
         },
       })
         .then((res) => res.json())
         .then((res) => {          
           if (res.error_token) {
             return false
           } else {
            name(res.pseudo);
            score(res.score);
             return true
             

           }
         })
         .catch((err) => {
           console.log(err);
           return false
         });
 }