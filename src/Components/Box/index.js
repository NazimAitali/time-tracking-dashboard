import React from "react";
import "./style.scss";
import data from "../../data/data.json";
import { Switch } from "../../Functions";
const Box = ({ menu }) => {
  return (
    <>
      {data.map((elem, index) => (
        <div className={`${elem.id} Box-container`} key={index}>
          <div className={`Box-content ${elem.title}`}>
            <div className="Box-cover">
              <div className="Box-cover-content">
                <div className="Box-title-content">
                  <div className="Box-title">{elem.title}</div>
                  <div className="More">
                    <div className="Point">.</div>
                    <div className="Point">.</div>
                    <div className="Point">.</div>
                  </div>
                </div>
                <div className="Box-time-content">
                  <div className="Hours">{Switch(menu, elem).current}hrs</div>
                  <div className="Moments">
                    {Switch(menu, elem).text} - {Switch(menu, elem).previous}hrs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
