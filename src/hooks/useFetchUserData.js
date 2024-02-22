import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/dataSlice";
import { USER_INFO_API } from "../utils/Constants";

const useFetchUserData = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const data = await fetch(USER_INFO_API);
    const json = await data.json();
    const userData = json?.map((user) => ({ ...user, isFollowing: false }));
    dispatch(addUser(userData));
  };

  useEffect(() => {
    getUserData();
  }, []);
};

export default useFetchUserData;
