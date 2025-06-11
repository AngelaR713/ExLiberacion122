import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./pages/Login/Login";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import Access from "./pages/Access/Access";
// import Home from "./pages/Home/Home";
// import LogIn from "./pages/LogIn/LogIn";
// import useAuth from "./hooks/useAuth";
// import Signup from "./pages/Signup/Signup";

const useRouter = () => {
  const { auth } = useAuth();
  useEffect(() => {console.log(auth)}, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />  ,
    },
    {
      path: "/login",
      element:  <Login /> ,
    },
  ]);

  return { router };
};

export default useRouter;
