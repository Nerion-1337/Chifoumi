"use client"

// API
import { user_player, user_open } from "#4_api/fetch_user.tsx"
import { gameplay } from "#4_api/fetch_game.tsx"
import { rank_10 } from "#4_api/fetch_ranking.tsx"
// BUILD
import Header from "#5_components/build/header.tsx";
import Typo from "#5_components/build/global/typography.tsx";
import Input from "#5_components/build/global/input.tsx";
import Button from "#5_components/build/global/button.tsx";
import Img from "#5_components/build/global/img.tsx";
import Ranking from "#5_components/modal/ranking.tsx";
// COMPONENTS
import { handleChange } from "#5_components/formData.tsx";
// DATA
import { Input_register, Img_choose } from "#3_data/links.tsx";
// REACT
import { useState, useEffect } from "react";
// TYPE
import { typeString, mixte } from "#2_types/typages.tsx";
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
let token;
const [validToken, setValidToken] = useState<boolean> (false);
//
const [formData, setFormData] = useState<typeString>({});
//
const [scoring, setScoring] = useState<number>(0);
const [nameUser, setNameUser] = useState<string>("pseudo");
//
const [game, setGame] = useState<boolean>(false);
const [nameChifoumi, setNameChifoumi] = useState<string>();
//
const [result_user, setResult_user] = useState<number>(0);
const [result_server, setResult_server] = useState<number>(0);
const [winOrLose, setWinOrLose] = useState<string>();
//
const [ranking, setRanking] = useState<mixte[]>([]);
const [activeRanking, setActiveRanking] = useState<boolean>(false);
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
useEffect(()=>{
  token = localStorage.getItem("token_chifoumi");
}, [])
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
  user_player({
    formData: formData,
    name: setNameUser,
    score: setScoring
  })
  .then((isConfirmer:  boolean) =>{
    setValidToken(isConfirmer)
  })
}
//
// ACTIVE MODAL CLASSEMENT
const rankingSubmit = () => {
  rank_10({fonction: setRanking})
  setActiveRanking(true)
}
//
// MODIFIE TEXT SI HOVER IMG
const handleHover = (label: string) => {
  setNameChifoumi(label);
};
// REINITIALISE APRES HOVER
const handleMouseLeave = () => {
  setNameChifoumi("");
};
//
// ACTIONS REALISE APRES SELECTION MAIN
const chooseSubmit = (data: string) =>{
  gameplay({
    option_user: data,
    option_ia: setResult_server,
    resultmatch: setWinOrLose,
    resultscore: setScoring
  })
  setResult_user(data === "paper" ? 0 :
                 data === "scissors" ? 1 :
                 data === "rocks" ? 2 : 0
  )
  setNameChifoumi("");
  setGame(true)
}
//
//
// BUILDER
//
//
// BOUCLE CHOIX GAME
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
    size="8"
    color="cb"
    transform="maj"
    familly="f3"
    children={nameChifoumi ? nameChifoumi : "choisis ta main"}
    />
  <div className="img_choose">
{chifoumi_choose}
  </div>
  </article>
)
//
const resultat = (
  <article className="result_game">
    <Typo
    balise="h1"
    size="8"
    familly="f3"
    color="cb"
    transform="maj"
    children={nameChifoumi ? nameChifoumi : "resultat"}
    />
<div className="bloc_result_global">
    < div className="bloc_result_player">
  <Img
  sizeBloc={Img_choose[result_user].sizeBloc}
  sizeImg={Img_choose[result_user].sizeImg}
  radius={Img_choose[result_user].radius}
  src={Img_choose[result_user].src}
  alt={Img_choose[result_user].alt}
  className={Img_choose[result_user].className}
  enterMousse={handleHover}
  data_mousse={Img_choose[result_user].data_mousse}
  leavemousse={handleMouseLeave}
  />

<Typo
    balise="span"
    size="7"
    color="cb"
    familly="f2"
    transform="maj"
    children="Ton choix"
    />
  </div>

  <Typo
    balise="span"
    size="9"
    color="cb"
    familly="f2"
    transform="maj"
    children={winOrLose === "draw" ? (<>match <br/> nul</>) 
                                   : (<>you <br/> {winOrLose}</>)}
    className="title_result"
    />
    
  < div className="bloc_result_player">
    <Img
  sizeBloc={Img_choose[result_server].sizeBloc}
  sizeImg={Img_choose[result_server].sizeImg}
  radius={Img_choose[result_server].radius}
  src={Img_choose[result_server].src}
  alt={Img_choose[result_server].alt}
  className={Img_choose[result_server].className}
  enterMousse={handleHover}
  data_mousse={Img_choose[result_server].data_mousse}
  leavemousse={handleMouseLeave}
  />

<Typo
    balise="span"
    size="7"
    color="cb"
    familly="f2"
    transform="maj"
    children="L'IA"
    />
  </div>
</div>
  <Button
  variant="t1"
  fontSize="s1"
  children="Rejouer"
  fonction={setGame}
  data_function={false}
  />
  </article>
)
//
const chifoumi = (
  <section className="body_game">
  {score}
  {!game && choose}
  {game && resultat}
  </section>
)
//
const content = (
  <>
  <Header
  data={validToken}
  fonction={setValidToken}
  gamefunction={setGame}
  />
  <Ranking 
  active={activeRanking}
  fonction={setActiveRanking}
  data={ranking}
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
