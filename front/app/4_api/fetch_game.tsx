// DATA
import { Route_Server } from "#3_data/links.tsx";
// TYPAGE
import { gameplay } from "#2_types/typages.tsx";
//
//
// USER PLAYER
//
//
export function gameplay({
  option_user,
  option_ia,
  resultmatch,
  resultscore
}: gameplay): Promise<boolean>{
//
//
//  
    return fetch(`${Route_Server[0].url}${Route_Server[3].url}`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `${localStorage.getItem("token_chifoumi")}`,
         },
         body: JSON.stringify({
          option_user: option_user,
         }),
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
           } else if(res.error_option_game){
            console.log(res.error_option_game)
             return false
//             
           } else{
            option_ia(
                 res.option_ia === "paper" ? 0 :
                 res.option_ia === "scissors" ? 1 :
                 res.option_ia === "rocks" ? 2 : 0
            );
            resultmatch(res.result)
            resultscore((prevScoring: number) => prevScoring + res.score)
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