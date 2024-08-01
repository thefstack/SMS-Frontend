const StudentReducer = (state, action) => {
  switch (action.type) {
    case "SET_STUDENT_DATA": {
      return {
        ...state,
        isLoading: false,
        studentData: action.payload,
      };
    }
    case "SET_SINGLE_STUDENT": {
      const student = action.payload;
      const trimmedDob = student.dob.split("T")[0];

      return {
        ...state,
        isLoading: false,
        singleStudent: {
          ...student,
          dob: trimmedDob,
        },
      };
    }
    case "SET_FILTER_DATA_BY_ID":{
      const id=action.payload[0];
      const studentData=action.payload[1];
      return {
        ...state,
        filteredData:studentData.filter(student=>student.id && student.id.startsWith(id))
      }
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
    case "SET_ISREMOVED": {
      return {
        ...state,
        isLoading: false,
        isRemoved: true,
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

export default StudentReducer;
