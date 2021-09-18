import React, { useState } from "react";
import "./style.scss";
import Card from "../Card";
import Box from "../Box";
const Container = () => {
  const [menu, setMenu] = useState(1);

  return (
    <div className="Container">
      <Card menu={menu} setMenu={setMenu} />
      <Box menu={menu} />
    </div>
  );
};

export default Container;
