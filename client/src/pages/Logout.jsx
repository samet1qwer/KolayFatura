import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiCall, logout } from "../redux/slices/api";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, success } = useSelector((state) => state.api);
  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
      return;
    }
    dispatch(apiCall({ url: "/auth/logout", method: "GET" }));
  }, [token, dispatch, navigate]);

  useEffect(() => {
    if (success) {
      dispatch(logout());
      navigate("/auth/login");
    }
  }, [success, dispatch, navigate]);

  return;
}

export default Logout;
