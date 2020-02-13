import React from "react";
function UserCard()
{
  var cardContainer =
  {
    float:'left',
    padding: '50px',
    marginBottom: '60px',
    border: '2px',
    backgroundColor: '#ecf0f1'

  }
  var stylingLinks =
  {

    padding: '10px',
    position: 'relative',


  }
  return (
    <div style={cardContainer}>
    <h3>Adilet Momunaliev</h3>
    <a href="#" style={stylingLinks}>Tweets</a>
    <a href="#" style={stylingLinks}>Following</a>
    <a href="#" style={stylingLinks}>Followers</a>


    <br/>
   </div>

  );
}
export default UserCard;
