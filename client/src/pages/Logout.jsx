import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../redux/slices/api";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.api);
  dispatch(apiCall({ url: "/auth/logout", method: "GET" }));
  navigate("/auth/login");
  return;
}

export default Logout;
