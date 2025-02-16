import { IconType } from "react-icons";
// REACT
import { Dispatch, ReactNode, SetStateAction } from 'react';
//
// CONSTRUCTION TYPAGE
//
export interface iconProps {
  icon: IconType;
}
//
export interface listIconProps {
  icon: IconType[];
  name: string[];
}
//
//
// SÉCURISER DONNÉES
//
//
export type linksType = "intern" | "extern";
//
//
// GLOBAL
//
//
export interface keys {
  key?: number;
}
//
export interface size {
  size?: string;
}
//
export interface balise {
  balise?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "li" | "span" | "label" | "figcaption";
}
//
export interface color {
  color?: string;
}
//
export interface fontSize {
fontSize?: "s0" | "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8";
}
//
export interface transform {
  transform?: "maj" | "min" | "cap";
  }
//
export interface variant {
  variant?: "t0" | "t1" | "t2" | "t3" | "t4" | "t5" | "t6" | "t7" | "t8" | "t9" | "t10" | "icon";
  }
//
export interface sizeBloc {
  sizeBloc?: "s0" | "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8" | "s9" | "s10";
}
//
export interface sizeImg {
  sizeImg?: "s0" | "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8" | "s9" | "s10";
}
//
export interface sizeWeight {
  weight?: "w1" | "w2" | "w3" | "w4" | "w5" | "w6" | "w7" | "w8" | "w9";
}
//
export interface typeFamilly {
  familly?: "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9";
}
//
export interface mouseHover {
handleMouse: Function;
data_mouse?: string;
}
//
//
// DATA
//
//
export interface linksProps {
  label?: string;
  title?: string;
  url?: string;
  type?: linksType;
  icon: iconProps;
  special?: string;
  infos?: string;
}
//
//
export interface persoProps {
  nav: route[];
  links: linksProps[];
}
//
//
export interface route {
  index?: number;
  label: string;
  url: string;
  url_id?: string;
  type: linksType;
  page?: React.ReactNode;
}
//
//
export interface List_Icon{
  [key: string]: {
    key?: number;
    type: string,
    icon: iconProps,
  }[];
}
//
//
export interface icon{
  icon: iconProps;
}
//
//
export interface aproposProps{
  title: string;
  span: string;
  icon: iconProps;
  p: React.ReactNode;
}
//
//
export interface input extends Partial<variant & size & keys>{
  variable: string;
  type: string;
  icon: iconProps;
  text: string;
  identifiant?: string;
  value?: string | number;
  element?: string;
  unitee?:string;
  multiples?: boolean;
  className?: string;
  special?: string;

}
//
//
export interface regex{
  id: number;
  type: string;
  value: RegExp;
}
//
//
export interface modal_links {
  id: number;
  name: string;
  type: string;
  children: React.ReactNode;
}
//
//
export interface typeString{
  [key: string]: string;
}
//
//
export interface calcule{
  [key: string]: number;
  }
//
//
export interface mixte{
  [key: string]: number | string;
}  
//
//
// BUILD
//
//
export interface button extends Partial<keys & size & fontSize & variant>{
  icon?: iconProps;
  disabled?: boolean;
  loading?: boolean;
  item_i?: boolean;
  className?: string;
  children?: React.ReactNode;
  children_actif?: React.ReactNode;
  active_child?: boolean;

  fonction?: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data_function?: any;
  href?: string;
  active_href?: string;
  type?: string;
  special?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useRef?: React.Ref<any>;
  input?: boolean;
  value_input?: string;
}
//
//
export interface typo extends Partial<keys & size & balise & color & transform & sizeWeight & typeFamilly & mouseHover>{
className?: string;
children?: React.ReactNode;
fonction?: Function;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
data_function?: any;
href?: string;
active?: string;
type?: string;
special?: string;
copy?: string;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
useRef?: React.Ref<any>;
datatext?: string;
icon?: iconProps;
LR?: string;
item_i?: boolean;
loading?: boolean;
}
//
//
export interface navlink {
  href: string;
  active?: string;
  type?: string;
  children: React.ReactNode;
  special?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useRef?: React.Ref<any>;
  datatext?: string;

  fonction?: Function;
}
//
//
export interface spinner extends Partial<size & variant>{
  icon?: iconProps;
  children?: React.ReactNode;
}
//
//
export interface img extends Partial<sizeBloc & sizeImg>{
  key?: number;
  src?: string,
  alt?: string,
  className?: string;
  classImg?: string;
  radius?: string;
  classLink?: string;
  href?: string;
  active?: string;
  type?: string;
  special?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useRef?: React.Ref<any>
  datatext?: string;
 
  fonction?: Function;
  data_function?: any;  
  enterMousse?: Function;
  data_mousse?: any;
  leavemousse?: Function;
}
//
//
export interface input_type extends Partial<variant & size>{
  element?: string;
  type?: string;
  icon?: iconProps;
  text?: string;
  value?: string | number;
  unitee?: string;
  variable: string;
  multiples?: boolean;
  identifiant?: string; 
  fonction?: Function;
  search?: Function; 
  data?: string;
  special?: string;
}
//
//
export interface header {
  data: boolean; 
  fonction: Function;
  gamefunction: Function;
}
//
//
export interface modal_ranking{
  active: boolean;
  fonction: Function;
  data: mixte[];
}
//
//
// ERROR PAGE
//
//
export interface err_type {
    error: Error;
    reset: () => void;
}
//
//
// API
//
//
export interface loginUser{
  formData:typeString;
  name: Function;
  score: Function;
}
//
//
export interface openUser{
  name: Function;
  score: Function;
}
//
//
export interface gameplay{
  option_user: string;
  option_ia: Function;
  resultmatch:Function;
  resultscore:Function;

}
//
//
export interface ranking{
  fonction: Function;
}
//
//
export interface tokenValid{
  name: Function;
  score: Function;
}
//
//
// COMPONENT
//
//
export interface RouterContextProps {
    pathname?: string;
    children?: ReactNode;
  }
//
export interface RouterProviderProps {
    children: ReactNode;
  }  
//
export interface ChangeHandle{
  fieldName: string; 
  newValue: string;
  idValue?: string;
  setFormData: Dispatch<SetStateAction<typeString>>;
}