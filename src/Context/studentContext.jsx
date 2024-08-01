import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../Reducer/studentReducer";



const AppContext = createContext();

let API = "https://rsmeds-server.onrender.com/";

let initialState = {
  isLoading: false,
  isError: false,
  studentData: [],
  singleStudent:{},
  isAdding: false,
  isView:false,
  isAdded:0,
  isUpdated:0,
  isRemoved:0,
  filteredData:[]
};

const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStudent = async () => {
    try {
      const url=`${API}student`
      const res = await axios.get(url,{withCredentials:true});
      const students = await res.data;
      await dispatch({ type: "SET_STUDENT_DATA", payload: students });
    } catch (error) {
      console.log("Student Error ", error)
      dispatch({ type: "API_ERROR" });
    }
  };

  const addStudent=async(data)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      
      let maxId = state.studentData.reduce((max, student) => {
        return student.id > max ? student.id : max;
      }, 0);
      maxId=parseInt(maxId,10);
      maxId=maxId+1;
      maxId=maxId.toString();
      if(data.aadhar===''){data.aadhar=null}
      if(data.email===''){data.email=null}
      if(data.phone1===''){data.phone1=null}
      data.id=maxId;
      data.admission_date=new Date()
      const res=await axios.post(`${API}student`,data,{withCredentials:true});
      if(res.status===200){
        await getStudent(`${API}student`);
        await dispatch({type:"SET_ISADDED", payload:res.data.id})
        
      }else{
        throw new Error();
      }
    }catch(error){
      console.log(error)
      dispatch({type:"SET_ISADDED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }
  const updateStudent=async(data,id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.put(`${API}student/${id}`,data,{withCredentials:true});
      if(res.status===200){
        await getStudent(`${API}student`);
        await dispatch({type:"SET_ISUPDATED", payload:1})
        
      }else{
        throw new Error();
      }
    }catch(error){
      dispatch({type:"SET_ISUPDATED", payload:-1})
      dispatch({ type: "API_ERROR" });
    }
  }

  const getStudentById=async(id)=>{
    await dispatch({ type: "SET_LOADING" });
    try{
        const res=await axios.get(`${API}student/${id}`,{withCredentials:true});
        const data=await res.data;
        await dispatch({type:"SET_SINGLE_STUDENT",payload:data})
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

  const removeStudent=async(id)=>{
    await dispatch({type:"SET_LOADING"})
    try{
      const res=await axios.delete(`${API}student/${id}`,{withCredentials:true});
      if(res.status===200){
        await getStudent(`${API}student`);
        await dispatch({type:"SET_ISREMOVED"})
      }else{
        throw new Error();
      }

    }catch(error){
      dispatch({ type: "API_ERROR" });
    }
  }

  const filterStudentById=async(id)=>{
    try{
      dispatch({type:"SET_FILTER_DATA_BY_ID", payload:[id,state.studentData]})
    }catch(error){
      console.log(error)
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
    getStudent();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, filterStudentById, addStudent, getStudent, updateStudent, setIsAdding, setIsView,getStudentById, removeStudent }}>
      {children}
    </AppContext.Provider>
  );
};

const useStudentContext = () => {
  return useContext(AppContext);
};

export { StudentProvider, AppContext, useStudentContext };
