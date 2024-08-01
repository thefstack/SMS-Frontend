import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../Reducer/subjectReducer";

const AppContext = createContext();

let API = "https://rsmeds-server.onrender.com/";

let initialState = {
  isLoading: false,
  isError: false,
  subjectData: [],
  singleSubject:{},
  isAdding: false,
  isView:false,
  isAdded:0,
  isUpdated:0,
  isRemoved:0
};

const SubjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getSubject = async (url) => {
    await dispatch({type:"SET_LOADING"})
    try {
      const res = await axios.get(url,{withCredentials:true});
      const subjects = await res.data;
      await dispatch({ type: "SET_SUBJECT_DATA", payload: subjects });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const addSubject=async(data)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.post(`${API}subject`,data,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISADDED", payload:res.data.id})
        getSubject(`${API}subject`);
      }else{
        throw new Error();
      }
    }catch(error){
      console.log(error)
      dispatch({type:"SET_ISADDED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }
  const updateSubject=async(data,id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.put(`${API}subject/${id}`,data,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISUPDATED", payload:1})
        getSubject(`${API}subject`);
      }else{
        throw new Error();
      }
    }catch(error){
      dispatch({type:"SET_ISUPDATED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }

  const getSubjectById=async(id)=>{
    await dispatch({ type: "SET_LOADING" });
    try{
        const res=await axios.get(`${API}subject/${id}`,{withCredentials:true});
        const data=await res.data;
        await dispatch({type:"SET_SINGLE_SUBJECT",payload:data})
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

  const removeSubject=async(id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.delete(`${API}subject/${id}`,{withCredentials:true});
      if(res.status===200){
        await dispatch({type:"SET_ISREMOVED"})
        getSubject(`${API}subject`);
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
    getSubject(`${API}subject`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, addSubject, getSubject, updateSubject, setIsAdding, setIsView,getSubjectById, removeSubject }}>
      {children}
    </AppContext.Provider>
  );
};

const useSubjectContext = () => {
  return useContext(AppContext);
};

export { SubjectProvider, AppContext, useSubjectContext };
