import menuslice from "./menuslice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: menuslice,
    search: searchSlice,
    chat: ChatSlice,
  },
});

export default store;
