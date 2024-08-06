import { deleteUserById, UserId } from "../store/users/slice";
import { useAppDispatch } from "./useStore";

export const useUsersActions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return {
    removeUser,
  };
};
