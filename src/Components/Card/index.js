import React from "react";
import "./style.scss";
import profilImg from "../../img/image-jeremy.png";
import { onChangeMenu } from "../../Functions";
const Card = ({ menu, setMenu }) => {
  return (
    <div className="Item Card-container">
      <div className="Card-content Info">
        <div className="Card-cover">
          <div className="Card-content-container">
            <img className="img" src={profilImg} alt="img" />
            <div className="Title-content">
              <div className="Card-title">Report for</div>
              <div className="Name">Jeremy Robson</div>
            </div>
          </div>
        </div>
        <div className="Menu-container">
          <ul className="Menu">
            <li
              className={menu === 1 ? "Selected" : null}
              onClick={() => onChangeMenu(1, setMenu)}
            >
              Daily
            </li>
            <li
              className={menu === 2 ? "Selected" : null}
              onClick={() => onChangeMenu(2, setMenu)}
            >
              Weekly
            </li>
            <li
              className={menu === 3 ? "Selected" : null}
              onClick={() => onChangeMenu(3, setMenu)}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
