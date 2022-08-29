import React from "react";
import "./Card.css";
import { PlusCircleFilled, PlayCircleFilled } from "@ant-design/icons";
const Card = ({ color, headText, text, price }) => {
  return (
    <div className="card">
      <div className="cardTop">
        <img src="https://mediablog.cdnpk.net/sites/9/2021/12/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg" />
      </div>
      <div className="cardBottom" style={{ backgroundColor: color }}>
        <div className="cardText">
          <div>{headText}</div>
          <div>{text}</div>
          <div className="cardTextBottom">
            <div className="cardTextBottomLeft">{price} DTSU*</div>
            <div className="cardTextBottomRight">
              <div><PlayCircleFilled /></div>
              <div>
                <PlusCircleFilled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
