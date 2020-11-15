import axios from "axios";
// IE에서 axios 통신 결과 캐싱되는 현상 방지
axios.defaults.headers.common = {
  Pragma: "no-cache",
};
export const productListApi = process.env.REACT_APP_PRODUCT_API;
