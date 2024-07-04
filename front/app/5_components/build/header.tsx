"use client"

// BUILD
import Typo from "#5_components/build/global/typography.tsx";
import Button from "#5_components/build/global/button.tsx";
// DATA
import { List_icon } from "#3_data/links.tsx";
// TYPE
import { header } from "#2_types/typages.tsx";
//
//
//
//
//
export default function Header({
    data,
    fonction,
    gamefunction,
}: header){
//
//
// FUNCTION
//
//
const back_name = () =>{
localStorage.removeItem('token_chifoumi');
fonction(false)
gamefunction(false)
}
//
//
// BUILD
//
//
//
const button_back = (
    <>
    <Button
         variant="t1"
         size="s3"
         fontSize="s5"
         icon={List_icon.all[1].icon}
         className="back_tchat"
         fonction={back_name}
        /> 
    </>
)
//
const content =(
    <header className="header_site">
    {data && button_back}       
    <Typo
    balise="h1"
    size="9"
    color="cb"
    transform="maj"
    children="chifoumi"
    className="title_site"
    />
    </header>
)
//
//
// RETURN
//
//    
    return content;
}