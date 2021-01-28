import axios from "axios";
// IE에서 axios 통신 결과 캐싱되는 현상 방지
axios.defaults.headers.common = {
  Pragma: "no-cache",
};
// const getPostByNo = no => {
//   const array = productListApi.filter(x => x.no == no);
//   if (array.length == 1) {
//     return array[0];
//   }
//   console.log(array.length);
//   return null;
// };
// export default getPostByNo;
export const productListApi = process.env.REACT_APP_PRODUCT_API;
