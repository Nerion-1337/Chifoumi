// ICONS
import { GiDualityMask } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { HiMiniUser } from "react-icons/hi2";
import { TbArrowBigLeftFilled } from "react-icons/tb"
// TYPAGE
import { linksType, route, List_Icon, typeString, input, img} from "#2_types/typages.tsx";
//
//
//
//
//
export const Typelinks: Record<string, linksType> = {
    INTERN: "intern",
    EXTERN: "extern",
};
//
//
// ROUTES
//
//
export const Route_Page: route[] = [
    {
      index: 0,
      label: "home",
      url: "/",
      type: "intern",
      page: "<Home/>",
    },
];
//
export const Route_Server: route[] = [
    {
      index: 0,
      label: "all",
      url: "http://localhost:5000/api",
      type: "intern",
    },
    {
      index: 1,
      label: "user",
      url: "/users/enter",
      type: "intern",
    },
    {
      index: 2,
      label: "token",
      url: "/users/open",
      type: "intern",
    },
    {
      index: 3,
      label: "game",
      url: "/game/gameplay",
      type: "intern",
    },
    {
      index: 4,
      label: "game",
      url: "/rank/top10",
      type: "intern",
    },
];
//
//
// LINKS SERVEURS
//
//
export const Links_Server: typeString[] = [
  {
    table: "users",
    id: "id",
    pseudo: "pseudo",
    score: "score",
    date_ajout: "date_ajout",
    date_maj: "date_maj",
},
]  
//
//
// ICON
//
//
export const List_icon: List_Icon = {
  all: [
    {
      key: 0,
      type: "user",
      icon: { icon: HiMiniUser },
    },
    { 
      key: 1,
      type: "arrow back",
      icon: {icon: TbArrowBigLeftFilled },
    },
    {
      key: 2,
      type: "étoile",
      icon: {icon: GrClose},
    },
  ],
}
//
//
// INPUT
//
//
export const Input_register: input[] = [
  {
    key: 0,
    variant: "t2",
    variable: Links_Server[0].pseudo,
    type: "text",
    icon: {icon: GiDualityMask},
    text: "identifiant",
    identifiant: "identifiant",
    value: "",
    element: "text",
    unitee: "",
  },
]
//
//
// IMG
//
//
export const Img_choose: img[] = [
  {
    key: 0,
    sizeBloc: "s6",
    sizeImg: "s6",
    radius: "r5",
    src: "./0_assets/paper.png",
    alt: "button paper",
    data_function: "paper",
    data_mousse: "feuille",
    className: "paper",
  },
  {
    key: 1,
    sizeBloc: "s6",
    sizeImg: "s6",
    radius: "r5",
    src: "./0_assets/scissors.png",
    alt: "button scissors",
    data_function: "scissors",
    data_mousse: "ciseaux",
    className: "scissors",
  },
  {
    key: 2,
    sizeBloc: "s6",
    sizeImg: "s6",
    radius: "r5",
    src: "./0_assets/rocks.png",
    alt: "button rocks",
    data_function: "rocks",
    data_mousse: "pierre",
    className: "rocks",
  },
]