import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/teacherReducer";
import { Error } from "@mui/icons-material";

const AppContext = createContext();

let API = "https://rsmeds-server.onrender.com/";

let initialState = {
  isLoading: false,
  isError: false,
  teacherData: [],
  singleTeacher: {},
  isAdding: false,
  isView: false,
  isAdded: 0,
  isUpdated: 0,
  isRemoved: 0,
};

const TeacherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const getTeacher = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(`${API}teacher`,{withCredentials:true});
      const teachers = await res.data;
      await dispatch({ type: "SET_TEACHER_DATA", payload: teachers });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const addTeacher = async (data) => {
    await dispatch({ type: "SET_LOADING" });
    try {
      if (data.aadhar === "") {
        data.aadhar = null;
      }
      if (data.email === "") {
        data.email = null;
      }
      const res = await axios.post(`${API}teacher`, data,{withCredentials:true});
      if (res.status === 200) {
        await dispatch({ type: "SET_ISADDED", payload: res.data.id });
        getTeacher(`${API}teacher`);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_ISADDED", payload: -1 });
      dispatch({ type: "API_ERROR" });
    }
  };
  const updateTeacher = async (data, id) => {
    await dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.put(`${API}teacher/${id}`, data,{withCredentials:true});
      if (res.status === 200) {
        await dispatch({ type: "SET_ISUPDATED", payload: 1 });
        getTeacher(`${API}teacher`);
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch({ type: "SET_ISUPDATED", payload: -1 });
      dispatch({ type: "API_ERROR" });
    }
  };

  const getTeacherById = async (id) => {
    await dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(`${API}teacher/${id}`,{withCredentials:true});
      const data = await res.data;
      await dispatch({ type: "SET_SINGLE_TEACHER", payload: data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const setIsAdding = async () => {
    try {
      await dispatch({ type: "SET_ISADDING" });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: initialState.isAdding });
    }
  };

  const removeTeacher = async (id) => {
    await dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.delete(`${API}teacher/${id}`,{withCredentials:true});
      if (res.status === 200) {
        dispatch({ type: "SET_ISREMOVED" });
        getTeacher(`${API}teacher`);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(Error);
      dispatch({ type: "API_ERROR" });
    }
  };
  const setIsView = async () => {
    try {
      await dispatch({ type: "SET_ISVIEW" });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: initialState.isAdding });
    }
  };
  useEffect(() => {
    getTeacher();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addTeacher,
        getTeacher,
        updateTeacher,
        setIsAdding,
        setIsView,
        getTeacherById,
        removeTeacher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useTeacherContext = () => {
  return useContext(AppContext);
};

export { TeacherProvider, AppContext, useTeacherContext };
