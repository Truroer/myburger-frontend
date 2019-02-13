import React from "react";
import classes from "./Menu.css";

const menu = props => (
  <div onClick={props.click} className={classes.MenuButton}>
    <div />
    <div />
    <div />
  </div>
);

export default menu;
