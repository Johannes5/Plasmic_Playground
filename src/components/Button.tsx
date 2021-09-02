// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps
} from "./plasmic/hub_hub/PlasmicButton";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

interface ButtonProps extends DefaultButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  text?: string;
  id?: string
}

function Button_(props: ButtonProps, ref: HTMLElementRefOf<"div">) {
  const { onClick, text, id, ...rest } = props;

  return <PlasmicButton
      root={{ ref }}
      {...props}
      text={text}
      id={id}
   />;
}

const Button = React.forwardRef(Button_);
export default Button;