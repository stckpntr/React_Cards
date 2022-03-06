import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const cardArray = [];
  contacts.forEach((element) => {
    cardArray.push(
      <Card
        name={element.name}
        img={element.imgURL}
        tel={element.phone}
        email={element.email}
      />
    );
  });

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cardArray}
    </div>
  );
}

export default App;
