"use client"

// API
import { user_player, user_open } from "@/app/4_api/fetch_user"
// BUILD
import Header from "#5_components/build/header.tsx";
import Typo from "#5_components/build/global/typography.tsx";
import Input from "#5_components/build/global/input.tsx";
import Button from "#5_components/build/global/button.tsx";
import Img from "#5_components/build/global/img.tsx";
// COMPONENTS
import { handleChange } from "#5_components/formData.tsx";
// DATA
import { Route_Page, Input_register, Img_choose } from "#3_data/links.tsx";
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
const [game, setGame] = useState<boolean> (false);
const [nameChifoumi, setNameChifoumi] = useState<string> ("choisis ta main");
const [scoring, setScoring] = useState<number>(0);
const [nameUser, setNameUser] = useState<string>("pseudo");
const [ranking, setRanking] = useState();
//
//
// REQUETTE
//
//
useEffect(()=>{
  user_open({name: setNameUser, score: setScoring})
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
// SEND USER BACK-END
const handleSubmit = () => {
  user_player(formData)
  .then((isConfirmer:  boolean) =>{
    setValidToken(isConfirmer)
  })
}
//
// ACTIVE MODAL CLASSEMENT
const rankingSubmit = () => {
  console.log("test")
}
//
//
const handleHover = (label: string) => {
  setNameChifoumi(label);
};
//
const handleMouseLeave = () => {
  setNameChifoumi("choisis ta main");
};
//
//
const chooseSubmit = (data: string) =>{
  console.log(data)
}
//
//
// BUILDER
//
//
const chifoumi_choose = Img_choose.map((item, index) =>(
  <Img
  sizeBloc={item.sizeBloc}
  sizeImg={item.sizeImg}
  radius={item.radius}
  src={item.src}
  alt={item.alt}
  fonction={chooseSubmit}
  data_function={item.data_function}
  className={item.className}
  enterMousse={handleHover}
  data_mousse={item.data_mousse}
  leavemousse={handleMouseLeave}
  key={index}
  />
))
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
const score = (
  <article className="header_score">
    <div className="pseudo_rank">
      <Typo
    balise="span"
    size="7"
    color="cb"
    familly="f2"
    transform="maj"
    children={nameUser}
    />
          <Button
  variant="t1"
  fontSize="s1"
  children="Classement"
  fonction={rankingSubmit}
  />
</div>
  <div className="bloc_score">
  <Typo
    balise="span"
    size="7"
    color="cb"
    transform="maj"
    children="score"
    />
        <Typo
    balise="span"
    size="10"
    color="cb"
    familly="f2"
    transform="maj"
    children={scoring}
    />

  </div>

  </article>
)
//
const choose = (
  <article className="game_choose">
      <Typo
    balise="h1"
    size="7"
    color="cb"
    transform="maj"
    children={nameChifoumi}
    />
  <div className="img_choose">
{chifoumi_choose}
  </div>
  </article>
)
//
const resultat = (
  <>
  
  </>
)
//
const chifoumi = (
  <section className="body_game">
  {score}
  {choose}
  </section>
)
//
const content = (
  <>
  <Header
  data={validToken}
  fonction={setValidToken}
  />
  <main className="home">
    {!validToken && registerUser}
    {validToken && chifoumi}
  </main>
  </>
)
//
//
// RETURN
//
//
  return content;
}
