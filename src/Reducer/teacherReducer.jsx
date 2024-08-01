const TeacherReducer = (state, action) => {
    switch (action.type) {
      case "SET_TEACHER_DATA": {
        return {
          ...state,
          isLoading: false,
          teacherData: action.payload,
        };
      }
      case "SET_SINGLE_TEACHER": {
        const teacher= action.payload;
        const trimmedDob = teacher.dob.split("T")[0];
  
        return {
          ...state,
          isLoading: false,
          singleTeacher: {
            ...teacher,
            dob: trimmedDob,
          },
        };
      }
      case "SET_ISUPDATED":{
          return {
              ...state,
              isLoading: false,
              isUpdated: action.payload,
            };
      }
      case "SET_ISADDED": {
        return {
          ...state,
          isLoading: false,
          isAdded: action.payload,
        };
      }
      case "SET_REMOVED": {
        return {
          ...state,
          isLoading: false,
          isRemoved: 1,
        };
      }
      case "API_ERROR": {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case "SET_LOADING": {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case "SET_ISADDING": {
        return {
          ...state,
          isAdding: !state.isAdding,
        };
      }
      case "SET_ISVIEW": {
        return {
          ...state,
          isAdding: !state.isView,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  
  export default TeacherReducer;
  