import menuslice from "./menuslice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
  reducer:{
    app:menuslice
  }
});

export default store;