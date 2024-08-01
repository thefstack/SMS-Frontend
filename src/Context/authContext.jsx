import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../Reducer/authReducer";

const AppContext = createContext();

let API = "http://localhost:5000/";

let initialState = {
  isLoading: false,
  isError: false,
  isLogin:0
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAuth = async (url) => {
    await dispatch({type:"SET_LOADING"})
    try {
      const res = await axios.get(url,{withCredentials:true});
      const auths = await res.data;
      await dispatch({ type: "SET_AUTH_DATA", payload: auths });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getAuth(`${API}/user`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, loginAuth, addAuth, getAuth, setIsAdding, setIsView,getAuthById, removeAuth }}>
      {children}
    </AppContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AppContext);
};

export { AuthProvider, AppContext, useAuthContext };
