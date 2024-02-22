import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/dataSlice";

const useFetchUserData = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    const userData = json?.map((user) => ({ ...user, isFollowing: false }));
    dispatch(addUser(userData));
  };

  useEffect(() => {
    getUserData();
  }, []);
};

export default useFetchUserData;
