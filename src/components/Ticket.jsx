import React from "react";
import PropTypes from "prop-types";
function Ticket(props)
{
  var myStyle = {
    float: 'right',
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    paddingLeft: '50px',
    boxSizing: 'border-box'


 };

    return(
      <div style = {myStyle}>
        <h3>{props.location}</h3>
        <h3>{props.name}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
    </div>
    );
}
Ticket.propTypes = {
                name: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired,
                issue: PropTypes.string
};
export default Ticket;
