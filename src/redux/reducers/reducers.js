import { combineReducers } from "redux";
import * as type from "../constants/actionTypes";

/*
    Reducer에서는 상태(state)를 관리한다.
    여러가지 리듀서를 작성한 후 combineReducer로 리듀서들을 합쳐주면 상태를 좀 더 나눠서 관리할 수 있게된다.

    {...state, ...newState} == Object.assign(state,{newState})
    ...state를 앞에 쓰는 것이 이전의 state값을 복제한 후 state를 변화시키는 것.
*/
const chatStates = {
  chatList: [],
  socketId: null,
};

const chatReducer = (state = chatStates, action) => {
  switch (action.type) {
    case type.MY_SOCKET_ID:
      return { ...state, socketId: action.socketId };
    case type.RECEIVE_CHAT:
      let newChatList = state.chatList.slice();
      newChatList.push(action.data);
      return { ...state, chatList: newChatList };
    case type.CLEAR_CHAT:
      return { ...state, chatList: [] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ chatReducer });

export default rootReducer;
