// COMPONENTS
import { setErreur, setValid } from "#5_components/valid_input.tsx";
// DATA
import { Route_Server, Links_Server } from "#3_data/links.tsx";
// TYPAGE
import { typeString } from "#2_types/typages.tsx";
//
//
// USER PLAYER
//
//
export function user_player(formData: typeString): Promise<boolean>{
    return fetch(`${Route_Server[0].url}${Route_Server[1].url}`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `${localStorage.getItem("token_chifoumi")}`,
         },
         body: JSON.stringify({
           [Links_Server[0].pseudo]: formData.pseudo,
         }),
       })
         .then((res) => res.json())
         .then((res) => {          
           if (res.error_identifiant) {
             setErreur(formData.idValue ? formData.idValue : "identifiant", res.error_identifiant)
             return false
           } else if(res.token){
            setValid(formData.idValue)
            localStorage.setItem("token_chifoumi", res.token)
             return true
           } else {
             console.log(res)
             return false
           }
         })
         .catch((err) => {
           console.log(err);
           return false
         });
 }