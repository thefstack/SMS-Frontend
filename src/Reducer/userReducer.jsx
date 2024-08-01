const UserReducer = (state, action) => {
    switch (action.type) {
      case "SET_USER_DATA": {
        return {
          ...state,
          isLoading: false,
          userData: action.payload,
          isError:false
        };
      }
      case "SET_SINGLE_USER": {  
        return {
          ...state,
          isLoading: false,
          singleUser: action.payload,
        };
      }
      case "SET_LOGIN": {
        return {
          ...state,
          isLoading: false,
          isLogin:1,
          isError:false,
          username:action.payload.username
        };
      }
      case "SET_FALSE_LOGIN": {
        return {
          ...state,
          isLoading: false,
          isLogin:-1
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
  
  export default UserReducer;
  