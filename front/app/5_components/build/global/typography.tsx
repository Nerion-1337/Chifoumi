import clsx from "clsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
// BUILD
import Spinner from "#5_components/build/global/spinner.tsx";
import Navlinks from "#5_components/build/global/navlink.tsx";
// ICONS
import { ImSpinner9 } from "react-icons/im";
// TYPAGE
import { typo } from "#2_types/typages.tsx";
//
//
//
//
//
export default function Typo({  
  size,
  balise: Balise = "div",
  color,
  weight,
  familly,
  transform,
  className,
  children,
  fonction = () => {
    console.log();
  },
  data_function,
  href,
  active,
  type,
  special,
  copy,
  useRef,
  datatext,
  icon,
  LR,
  item_i,
  loading,
  handleMouse,
  data_mouse,
}: typo) {
  //
  //
  // VARIABLE
  //
  //
  let sizeStyles = `size-typo${size}`;
  let colorStyles = color;
  let transformStyles = "";
  let weightStyles = "";
  let famillyStyles = "";
  //
  //
  // SWITCH
  //
  //
  switch (transform) {
    case "maj":
      transformStyles = "maj";
      break;
    case "min":
      transformStyles = "min";
      break;
    case "cap":
      transformStyles = "cap";
      break;  
  }
  //
  //
  switch (weight) {
    case "w1":
      weightStyles = "weight-typo1";
      break;
    case "w2":
      weightStyles = "weight-typo2";
      break;
    case "w3":
      weightStyles = "weight-typo3";
      break;
    case "w4":
      weightStyles = "weight-typo4";
      break;
    case "w5":
      weightStyles = "weight-typo5";
      break;
    case "w6":
      weightStyles = "weight-typo6";
      break;
    case "w7":
      weightStyles = "weight-typo7";
      break;
    case "w8":
      weightStyles = "weight-typo8";
      break;
    case "w9":
      weightStyles = "weight-typo9";
      break;
  }
  //
  //
  switch (familly) {
    case "f1":
      famillyStyles = "familly-typo1";
      break;
    case "f2":
      famillyStyles = "familly-typo2";
      break;
    case "f3":
      famillyStyles = "familly-typo3";
      break;
    case "f4":
      famillyStyles = "familly-typo4";
      break;
    case "f5":
      famillyStyles = "familly-typo5";
      break;
    case "f6":
      famillyStyles = "familly-typo6";
      break;
    case "f7":
      famillyStyles = "familly-typo7";
      break;
    case "f8":
      famillyStyles = "familly-typo8";
      break;
    case "f9":
      famillyStyles = "familly-typo9";
      break;
  }  
  //
  //
  // FUNCTION
  //
  //
  const handleClick = () => {
    if (fonction) fonction(data_function);
  };
  //
  //
  const mouseAction = (mouse_type: string) =>{
     if(handleMouse) handleMouse(data_mouse, mouse_type)
  }
  //
  //
  // BUILDER
  //
  //
  const typoContent = (
    <>
    {loading && <Spinner variant="t1" size="s1" icon={{ icon: ImSpinner9 }} />}

    {icon && !children && <icon.icon />}

    {icon && children && LR === "left" && <><icon.icon className="icon_left"/>{children}</>}

    {icon && children && LR === "right" && <>{children}<icon.icon className="icon_right"/></>}

    {item_i && children && LR === "left" && <><i className="icon_left"/>{children}</>}

    {item_i && children && LR === "right" && <>{children}<i className="icon_right"/></>}

    {!loading && !icon && !item_i && children}
    </>
  );
  //
  const typoElement = (
    <Balise
      className={clsx(sizeStyles, colorStyles, transformStyles, weightStyles, famillyStyles, className)}
      onClick={handleClick}
      ref={useRef}
      data-text={datatext}
      onMouseEnter={() => mouseAction("enter")}
      onMouseLeave={() => mouseAction("leave")}
    >
      {typoContent}
    </Balise>
  );
  //
  //
  if (href) {
    return (
      <Navlinks 
      href={href} 
      type={type} 
      active={active} 
      special={special} 
      className={clsx(sizeStyles, colorStyles, transformStyles, weightStyles, famillyStyles, className)}
      useRef={useRef}
      data-text={datatext}
      fonction={fonction}
      >
        {typoContent}
      </Navlinks>
    );
  } else if (copy) {
    return (
    <CopyToClipboard text={copy}>
      {typoElement}
      </CopyToClipboard>
      )
  }
  //
  //
  // RETURN
  //
  //
  return typoElement;
}


