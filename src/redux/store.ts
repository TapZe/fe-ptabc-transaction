import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/query";

// Import reducer here
import themeReducer from "./reducers/themeSlice";
import { transactionQueryAPI } from "./reducers/transactions/transactionQueryAPI";
import { transactionMutationAPI } from "./reducers/transactions/transactionMutationAPI";
import { productQueryAPI } from "./reducers/product/productQueryAPI";
import { productMutationAPI } from "./reducers/product/productMutationAPI";

const persistConfig = {
  key: "root",
  storage,
};

// If the reducers that need persist is more than one
const rootReducer = combineReducers({
  theme: themeReducer,
});

// for only one reducer needs persist, rootReducer can be replaced with the one reducer that needs it.
// it is recommended for future coding that it's saved in a root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
    [transactionQueryAPI.reducerPath]: transactionQueryAPI.reducer,
    [transactionMutationAPI.reducerPath]: transactionMutationAPI.reducer,
    [productQueryAPI.reducerPath]: productQueryAPI.reducer,
    [productMutationAPI.reducerPath]: productMutationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(transactionQueryAPI.middleware)
      .concat(transactionMutationAPI.middleware)
      .concat(productQueryAPI.middleware)
      .concat(productMutationAPI.middleware),
});

// Setup persistor
export const persistor = persistStore(store);

// Type Export
export type RootState = ReturnType<typeof store.getState>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
