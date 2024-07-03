"use client"
// API
import { user_player } from "#4_api/fetch_register_user.tsx"
import { token_valid } from "#4_api/fetch_token.tsx"
// BUILD
import Typo from "#5_components/build/global/typography.tsx";
import Input from "#5_components/build/global/input.tsx";
import Button from "#5_components/build/global/button.tsx";
// COMPONENTS
import { handleChange } from "#5_components/formData.tsx";
// DATA
import { Route_Page, Input_register } from "#3_data/links.tsx";
// NEXT
import Image from "next/image";
// REACT
import { useState, useEffect } from "react";
// TYPE
import { typeString } from "#2_types/typages.tsx";
//
//
//
//
//
export default function Home() {
//
//
// VARIABLE
//
//
const token = localStorage.getItem("token_chifoumi");
const [validToken, setValidToken] = useState<boolean> (false);
//
const [formData, setFormData] = useState<typeString>({});
//
//
// REQUETTE
//
//
useEffect(()=>{
  token_valid()
  .then((isConfirmer:  boolean) =>{
    setValidToken(isConfirmer)
  })
}, [token])
//
//
// FUNCTION
//
//
// SAUVEGARDE DATA USER
const addDataSimply = (fieldName: string, newValue: string, idValue: string,) => {
  handleChange({
    fieldName: fieldName, 
    newValue: newValue,
    idValue: idValue, 
    setFormData: setFormData})
}


//
const handleSubmit = () => {
  user_player(formData)
  .then((isConfirmer:  boolean) =>{
    setValidToken(isConfirmer)
  })
}
//
//
// BUILDER
//
//
const registerUser = (
  <div className="register_user">
    <Typo
    balise="span"
    size="7"
    color="cb"
    transform="maj"
    children="Renseignez un nom d'utilisateur:"
    />
<form action={handleSubmit}>
<Input
    variant={Input_register[0].variant}
    element={Input_register[0].element}
    type={Input_register[0].type}
    icon={Input_register[0].icon}
    text={Input_register[0].text}
    value={Input_register[0].value}
    unitee={Input_register[0].unitee}
    variable={Input_register[0].variable}
    identifiant={Input_register[0].identifiant}
    fonction={addDataSimply}
        />

      <Button
  variant="t1"
  fontSize="s2"
  children="ENTRER"
  fonction={handleSubmit}
  />
</form>
  </div>
)
//
const chifoumi = (
  <>
  test
  </>
)
//
const content = (
  <main className="home">
    <Typo
    balise="h1"
    size="10"
    color="cb"
    transform="maj"
    children="chifoumi"
    className="title_home"
    />

    {!validToken && registerUser}
    {validToken && chifoumi}
  </main>
)
//
//
// RETURN
//
//
  return content;
}
