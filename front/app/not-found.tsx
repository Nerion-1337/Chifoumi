'use client';
// BUILD
import Typo from "#5_components/build/global/typography.tsx";
// DATA
import { Route_Page } from "#3_data/links.tsx";
// TYPE
import { err_type } from "#2_types/typages.tsx";
//
//
//
//
//  
export default function Custom404({
    error,
    reset,
}: err_type) {
//
//
// VARIABLE
//
//
const home = Route_Page.find((Links) => {
    return Links.label === "home";
  });
//
//
// BUILD
//
//  
const content = (
<>
      <section className="error404">
        <Typo 
        size="404" 
        balise="span" 
        color="cb"
        children="404"
        />
        <Typo 
        size="6" 
        balise="span" 
        color="cb"
        children="La page que vous cherchez n'existe pas !"
        />
        <Typo 
        size="5" 
        balise="span" 
        color="ct" 
        className="backHomeError404"
        children="Retournez sur la page d’accueil"
        href={home ? home.url : "/"} 
        type={home ? home.type : "intern"}
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