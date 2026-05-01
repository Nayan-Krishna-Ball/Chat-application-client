import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllChats } from "../api/chat";
import { getAllUsers, getUserInfo } from "../api/user";
import { hideLoader, showLoader } from "../redux/loaderSlice";
import { setAllChats, setAllUsers, setUser } from "../redux/userSlice";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const getLoggedInUserInfo = async () => {
    let response = null;
    try {
      response = await getUserInfo();
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  };

  const getAllUsersFromDb = async () => {
    let response = null;
    try {
      dispatch(showLoader());
      response = await getAllUsers();
      dispatch(hideLoader());

      if (response.success) {
        dispatch(setAllUsers(response.data));
      } else {
        toast.error(response.message);
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoader());
      navigate("/login");
    }
  };

  const getCurrentUserChats = async () => {
    try {
      const response = await getAllChats();
      if (response.success) {
        dispatch(setAllChats(response.data));
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getLoggedInUserInfo();
      getAllUsersFromDb();
      getCurrentUserChats();
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
}
