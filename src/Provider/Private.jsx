import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import useAuth from "../Hooks/useAuth";
import loadingAnimation from "../assets/animation/loadingAnimation.json";

const Private = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <Lottie animationData={loadingAnimation} style={{ height: "50vh" }} />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" redirect/>;
};

export default Private;
