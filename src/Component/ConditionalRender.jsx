import React from "react";

function List(prpos) {
  if (!prpos.name) {
    return <h1>Santhoshkumar.P</h1>;
  }
  return (
    <div>
      <h1>you have paid the bill {prpos.name}</h1>
    </div>
  );
}

export default List;
