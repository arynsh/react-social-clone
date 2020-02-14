import  React from "react";
import PropTypes from "prop-types";

function ClassTweet(props)
{
  var styling =
 {
     //   display: "block",
     border: "2px solid #C3C5C7",
     padding: "10px",
     paddingBottom: "30px"
 }

 var imgStyling =
 {
     width: "45px",
     padding: "10px",
     float: "left"
 }
 var titleStyle =
 {
     fontWeight: "bold",
     paddingTop: "-50px",
     marginLeft: "10px",
 }
 var descriptionStyle =
 {
     marginLeft: "10px"
 }

  return (
    <div style = {styling}>
      <img style = {imgStyling} src = {props.img}/>
      <span style = {titleStyle} > {props.title} </span>
      <br/>
      <span style = {descriptionStyle} > {props.description} </span>
    </div>
  );
}
ClassTweet.propTypes =
{
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string

};

export default ClassTweet;
