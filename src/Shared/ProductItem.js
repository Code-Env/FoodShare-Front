import React from "react";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import background from "../assets/background.png";

const ProductItem = () => {
  return (
        <table className="Productitem">
            <thead>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="5"><img src={background} alt="background" className="backgroundimg"/></td>
                </tr>
                <tr>
                    <td colspan="2" rowspan= "2"className="itemname">상품제목 글자는 최대 2줄</td>
                </tr>
                <tr></tr>
                <tr>
                    <td className="location">거래위치</td> <td className="upload">9시간 전</td>
                </tr>
                <tr>
                    <td></td>
                    <td className="like">
                        <IconContext.Provider value={{ className: "heart" }}>
                            <div>
                                <FaHeart />
                                <span className="like"> 50</span>
                            </div>
                        </IconContext.Provider>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr><td colspan="3"></td></tr>
            </tfoot>
        </table>
    );
};

export default ProductItem;