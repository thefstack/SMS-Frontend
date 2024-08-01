import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../Reducer/classReducer";

const AppContext = createContext();

let API = "https://rsmeds-server.onrender.com/";
let initialState = {
  isLoading: false,
  isError: false,
  classData: [],
  singleClass:{},
  isAdding: false,
  isView:false,
  isAdded:0,
  isUpdated:0,
  isRemoved:0
};

const ClassProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getClass = async (url) => {
    try {
      const res = await axios.get(url,{withCredentials:true});
      const classs = await res.data;
      await dispatch({ type: "SET_CLASS_DATA", payload: classs });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const addClass=async(data)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.post(`${API}class`,data,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISADDED", payload:res.data.id})
        getClass(`${API}class`);
      }else{
        throw new Error();
      }
    }catch(error){
      console.log(error)
      dispatch({type:"SET_ISADDED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }
  const updateClass=async(data,id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.put(`${API}class/${id}`,data,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISUPDATED", payload:1})
        getClass(`${API}class`);
      }else{
        throw new Error();
      }
    }catch(error){
      dispatch({type:"SET_ISUPDATED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }

  const getClassById=async(id)=>{
    await dispatch({ type: "SET_LOADING" });
    try{
      console.log("Hello")
        const res=await axios.get(`${API}class/${id}`,{withCredentials:true});
        const data=await res.data;

        await dispatch({type:"SET_SINGLE_CLASS",payload:data})
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

  const removeClass=async(id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.delete(`${API}class/${id}`,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISREMOVED"})
        getClass(`${API}class`);
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
    getClass(`${API}class`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, addClass, getClass, updateClass, setIsAdding, setIsView,getClassById, removeClass }}>
      {children}
    </AppContext.Provider>
  );
};

const useClassContext = () => {
  return useContext(AppContext);
};

export { ClassProvider, AppContext, useClassContext };
