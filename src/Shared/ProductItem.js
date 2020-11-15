import React from "react";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";

const ProductItem = ({ productName, favouriteCount, position, productImg }) => {
  return (
    <table className="Productitem">
      <thead></thead>
      <tbody>
        <tr>
          <td rowSpan="5">
            <img src={productImg} alt="background" className="backgroundimg" />
          </td>
        </tr>
        <tr>
          <td colSpan="2" rowSpan="2" className="itemname">
            {productName}
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td className="location">{position}</td>
          <td className="upload">9시간 전</td>
        </tr>
        <tr>
          <td></td>
          <td className="like">
            <IconContext.Provider value={{ className: "heart" }}>
              <div>
                <FaHeart />
                <span className="like">{favouriteCount}</span>
              </div>
            </IconContext.Provider>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3"></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductItem;
