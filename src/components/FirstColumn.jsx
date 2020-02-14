import React from "react";
import UserCard from "./UserCard";
import UserAbout from "./UserAbout";
export default function FirstColumn ()
{
  var leftColumn =
  {
    float: "left",
    margin: "-10px 0px",
    width: "30%",
    display: "inline-block",
    paddingTop: "-70px"
  }
  return(
    <div style = {leftColumn}>
    <UserCard/>
    <UserAbout/>
    </div>
  );
}
