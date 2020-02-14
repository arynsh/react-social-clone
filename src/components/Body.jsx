import React from "react";
import FirstColumn from "./FirstColumn";
import MiddleColumn from "./MiddleColumn";
import LastColumn from "./LastColumn";

export default function Body()
{
  var bodyStyling =
  {
    
    display: "block",
    margin: "20px 0px"
  }
  return(
    <div style = {bodyStyling}>
    <FirstColumn/>
    <MiddleColumn/>
    <LastColumn/>
    </div>
  );
}
