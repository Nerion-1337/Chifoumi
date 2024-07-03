// ICONS
import { HiMiniUser } from "react-icons/hi2";
import { GiDualityMask } from "react-icons/gi";
// TYPAGE
import { linksType, route, List_Icon, typeString, input} from "#2_types/typages.tsx";
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
      url: "/users",
      type: "intern",
    },
    {
      index: 2,
      label: "token",
      url: "/token",
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