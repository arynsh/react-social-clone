import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import Navbar from "./Navbar";
import UserCard from "./UserCard";


function App(){
  return (
    <div>
      <Navbar/>
      <UserCard/>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
