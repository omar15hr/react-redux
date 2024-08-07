import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
  };

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;

  console.log(action);
  console.log(store);
  next(action);

  if (type === "users/deleteUserById") {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          toast.success(`Usuario ${payload} eliminado correctamente`);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Error al eliminar el usuario ${payload}`);
      });
  }
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      persistanceLocalStorageMiddleware,
      syncWithDatabase
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
