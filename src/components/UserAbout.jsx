import React from "react";
export default function UserAbout()
{
  var bodyContainer =
  {
    border: "2px solid gray",
    marginTop: "15px",
    height: "300px",
    padding: "15px"


  }
  return (
    <div style = {bodyContainer}>
      <p> Development environment is fully-functional, including Babel transpiling, Webpack module bundling, a development server with hot module replacement, and linting.
          Components are used to create modular UI elements.
          propTypes define data types and shapes for all component props.
          Application works as expected.
      </p>
    </div>
  );
}
