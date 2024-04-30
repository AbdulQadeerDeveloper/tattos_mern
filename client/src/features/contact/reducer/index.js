// Initial state for the auth message reducer
const initialState = {
    user: null,
    error: null,
    isLoading: false,
    isAuthenticated: false,
  };
  
  // Auth message reducer function
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MESSAGE_SEND_SUCCESS':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        };
      case 'MESSAGE_SEND_FAIL':
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
     
      default:
        return state;
    }
  };
  
  export default messageReducer;
  