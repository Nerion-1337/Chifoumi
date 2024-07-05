// COMPONENTS
import { setErreur, setValid } from "#5_components/valid_input.tsx";
// DATA
import { Route_Server, Links_Server } from "#3_data/links.tsx";
// TYPAGE
import { openUser, loginUser } from "#2_types/typages.tsx";
//
//
// FIRST CONNECT PLAYER
//
//
export function user_player({
  formData,
  name, 
  score
}: loginUser): Promise<boolean>{
    return fetch(`${Route_Server[0].url}${Route_Server[1].url}`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
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
            name(res.pseudo);
            score(res.score);
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
//
//
// PLAYER LAST CONNECT
//
//
export function user_open({
  name, 
  score
}: openUser): Promise<boolean>{
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
