import { useDispatch, useSelector } from "react-redux";
import { setAuthValue } from "../redux/slices/auth"; // Update path as needed

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);

  // Function to log in user
  const login = (email) => {
    console.log("making login")
    const authData = {
      isAuth: true,
      user: email,
    };

    // Update Redux store
    dispatch(setAuthValue(authData));

    // Save to localStorage
    localStorage.setItem("auth", JSON.stringify(authData));
  };

  // Function to log out user
  const logout = () => {
    const authData = {
      isAuth: false,
      user: "",
    };

    // Update Redux store
    dispatch(setAuthValue(authData));

    // Remove from localStorage
    localStorage.removeItem("auth");
  };

  return {
    auth: auth.isAuth,
    login,
    logout,
  };
};
