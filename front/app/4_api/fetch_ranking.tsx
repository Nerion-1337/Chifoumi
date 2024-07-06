// DATA
import { Route_Server} from "#3_data/links.tsx";
// TYPAGE
import { ranking } from "#2_types/typages.tsx";
//
//
// USER PLAYER
//
//
export function rank_10({
  fonction,
}: ranking): Promise<boolean>{
//
//
//  
    return fetch(`${Route_Server[0].url}${Route_Server[4].url}`, {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           Authorization: `${localStorage.getItem("token_chifoumi")}`,
         },
       })
//
//       
         .then((res) => res.json())
         .then((res) => { 
//                   
           if (res.error_token) {
            console.log(res.error_token)
             return false
//
           } else{
            fonction( res.top10 );
             return true 
           } 
         })
//
//         
         .catch((err) => {
           console.log(err);
           return false
         });
 }