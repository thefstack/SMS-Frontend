const SubjectReducer = (state, action) => {
    switch (action.type) {
      case "SET_SUBJECT_DATA": {
        return {
          ...state,
          isLoading: false,
          subjectData: action.payload,
        };
      }
      case "SET_SINGLE_SUBJECT": {  
        return {
          ...state,
          isLoading: false,
          singleSubject: action.payload,
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
  
  export default SubjectReducer;
  