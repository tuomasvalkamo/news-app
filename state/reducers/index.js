import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";

const reducers = combineReducers({
  bookmarks: bookmarkReducer
})

export default reducers