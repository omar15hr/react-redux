import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "John Doe",
    email: "John.Doe@example.com",
    github: "johndoe",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "Jane.Smith@example.com",
    github: "janesmith",
  },
  {
    id: "3",
    name: "Alice Brown",
    email: "Alice.Brown@example.com",
    github: "alicebrown",
  },
];

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux_state__");
  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
