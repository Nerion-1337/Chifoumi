"use client"

// BUILD
import Typo from "#5_components/build/global/typography.tsx";
import Button from "#5_components/build/global/button.tsx";
// DATA
import { List_icon } from "#3_data/links.tsx";
// REACT
import { useState, useEffect } from "react";
// TYPE
import { modal_ranking } from "#2_types/typages.tsx";
//
//
//
//
//
export default function Ranking({
    active,
    fonction,
    data,
}: modal_ranking){
//
//
// FUNCTION
//
//
const back_rank = () =>{
  fonction(false)
}
//
//
// BUILDER
//
//
const tableau = data.map((item, index)=>(
  <tr key={index}>
    <th>
      <Typo
          balise="span"
          size={index < 3 ? "7" : "5"}
          color="cw"
          familly="f1"
          transform="maj"
          children={item.pseudo}
    />
    </th>
    <th>
    <Typo
          balise="span"
          size={index < 3 ? "7" : "5"}
          color="cw"
          familly="f1"
          transform="maj"
          children={item.score}
    />
    </th>
  </tr>
))
//
//
const modal = (
    <section className="modal_rank">
   <Typo
          balise="span"
          size="9"
          color="c4"
          familly="f2"
          transform="maj"
          children="classement top 10"
    />
      <div className="tableau_top10">
      <Button
         variant="t2"
         size="s4"
         fontSize="s4"
         icon={List_icon.all[2].icon}
         className="back_rank"
         fonction={back_rank}
        /> 
   
    <table className="table-header">
    <thead>
    <tr>
      <th>
      <Typo
          balise="span"
          size="7"
          color="c4"
          familly="f1"
          transform="maj"
          children="pseudo"
    />
        </th>
      <th>
      <Typo
          balise="span"
          size="7"
          color="c4"
          familly="f1"
          transform="maj"
          children="score"
    />
        </th>
    </tr>
    </thead>
    <tbody>
      <tr className="tr_vide"></tr>
{tableau}
    </tbody>
    </table>
    </div>
    </section>
)
//
    const content = (
  <>
{active && modal}
  </>
)
//
//
// RETURN
//
//
  return content;    
}