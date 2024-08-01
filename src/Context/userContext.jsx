import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../Reducer/userReducer";

const AppContext = createContext();

let API = "https://rsmeds-server.onrender.com/";

let initialState = {
  isLoading: false,
  isError: false,
  userData: [],
  singleUser:{},
  isAdding: false,
  isView:false,
  isAdded:0,
  isUpdated:0,
  isRemoved:0,
  isLogin:0,
  username:"",
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser=async(data)=>{
    try{
      const res=await axios.post(`${API}user/login`,data,{
        withCredentials:true // this ensure cookies to be includes in the req
      });
      dispatch({type:"SET_LOGIN",payload:res})
    }catch(error){
        dispatch({type:"SET_FALSE_LOGIN"})
    }
  }

  const logout=async()=>{
    try{
      const res=await axios.post(`${API}user/logout`, {}, {
        withCredentials:true
      })
        document.cookie = 'token=; Max-Age=0; path=/;'
      dispatch({type:"SET_FALSE_LOGIN"})
    }catch(error){
      dispatch({type:"SET_FALSE_LOGIN"})
    }
  }
  const verifyToken=async()=>{
    try{
      const res=await axios.post(`${API}verify-token`, {}, {
        withCredentials:true
      })
    }catch(error){
      dispatch({type:"SET_FALSE_LOGIN"})
    }
  }
  const getUser = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      const res = await axios.get(url,{withCredentials:true});
      const users = await res.data;
      dispatch({ type: "SET_USER_DATA", payload: users });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const addUser=async(data)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.post(`${API}user`,data,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISADDED", payload:res.data.id})
        getUser(`${API}user`);
      }else{
        throw new Error();
      }
    }catch(error){
      console.log(error)
      dispatch({type:"SET_ISADDED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }

  const getUserById=async(id)=>{
    await dispatch({ type: "SET_LOADING" });
    try{
        const res=await axios.get(`${API}user/${id}`,{withCredentials:true});
        const data=await res.data;
        await dispatch({type:"SET_SINGLE_USER",payload:data})
    }catch(error){
        dispatch({ type: "API_ERROR" });
    }
  }

  const setIsAdding = async () => {
    try {
      await dispatch({ type: "SET_ISADDING" });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: initialState.isAdding });
    }
  };

  const removeUser=async(id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.delete(`${API}user/${id}`,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISREMOVED"})
        getUser(`${API}user`);
      }else{
        throw new Error();
      }

    }catch(error){
      dispatch({ type: "API_ERROR" });
    }
  }
  const setIsView = async () => {
    try {
      await dispatch({ type: "SET_ISVIEW" });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: initialState.isAdding });
    }
  };
  useEffect(() => {
    getUser(`${API}user`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, verifyToken, logout, loginUser, addUser, getUser, setIsAdding, setIsView,getUserById, removeUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(AppContext);
};

export { UserProvider, AppContext, useUserContext };
