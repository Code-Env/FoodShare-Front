import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/reducers";

/*
    리듀서는 여러 개를 작성할 수 있지만 스토어는 하나로 작성해아한다(분리할 수 있다고는 함)
    logger는 액션이 실행되고 state값이 바뀌는 부분을 콘솔창에 보여주는 편리한 미들웨어임.
*/
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
