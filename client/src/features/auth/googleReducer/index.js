const initialState = {
    loading: false,
    user: null,
    error: null,
  };
  
  const googleLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GOOGLE_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "GOOGLE_SUCCESS":
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null,
        };
      case "GOOGLE_FAILURE":
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default googleLoginReducer;
  