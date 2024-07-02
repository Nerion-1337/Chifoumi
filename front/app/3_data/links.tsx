// ICONS
import { HiMiniUser } from "react-icons/hi2";
// TYPAGE
import { linksType, route, List_Icon} from "#2_types/typages.tsx";
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
  ];
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