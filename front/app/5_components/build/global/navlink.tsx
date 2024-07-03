"use client"
// DATA
import { Typelinks } from "#3_data/links.tsx";
// NEXT
import Link from 'next/link';
import { useRouter } from 'next/router';
// REACT
import { createContext, useContext } from 'react';
// TYPAGE
import { navlink, RouterContextProps } from "#2_types/typages.tsx";
//
//
//
//
//
export default function Navlinks({
  href,
  children,
  active,
  type = "intern",
  special,
  className,
  useRef,
  datatext,
  fonction = () => {
    console.log();
  },
}: navlink) {
//
//
// VARIABLE
//
//
let urlStyles = "";
//
const RouterContext = useContext(createContext<RouterContextProps>({ pathname: '' }));
const { pathname } = RouterContext;
const isActive = pathname === href;
console.log(isActive)
//
//
// SWITCH
//
//
  switch (special) {
    case "tel":
      urlStyles = "tel:+33" + href?.slice(-9);
      break;
    case "mail":
      urlStyles = `mailto:${href}`;
      break;
  }
//
//
// FONCTION
//
//
  const handleClick = () => {
    if (fonction) fonction();
  };
//
//
// BUILDER
//
//
const link_interne = (
  <Link
  href={href}
  className={`${className ? className : ""} ${isActive ? active : ""}`}
  onClick={handleClick}
>
  {children}
</Link>
)
//
const link_externe = (
  <>
{ special ? ( 
          <a href={urlStyles} className={className} target="_blank" onClick={handleClick}>
        {children}
      </a>
      ) : (  
        <a href={href} className={className} target="_blank" onClick={handleClick}>
          {children}
        </a> 
        )}
  </>
)
//
const content_link = (
  <>
  {type === Typelinks.INTERN && link_interne}
  {type === Typelinks.EXTERN && link_externe}
  </>
)
//
//
// RETURN
//
//
  return content_link;
}