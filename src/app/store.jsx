import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: blogReducer,
  },

  middleware: (
    getDefaultMiddleware 
  ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.Node_ENV !== "production",
});
export const persistor = persistStore(store);
export default store;