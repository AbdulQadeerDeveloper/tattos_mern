import {
  FETCH_TATTOO_BEGIN,
  FETCH_TATTOO_SUCCESS,
  FETCH_TATTOO_FAILURE,
  UPDATE_TATTOO_SUCCESS,
  UPDATE_TATTOO_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  FETCH_PLACEMENT_REQUEST,
  FETCH_PLACEMENT_FAILURE,
  FETCH_PLACEMENT_SUCCESS
} from './actionType';


const initialState = {
  tattoo: null,
  category: null,
  placement: null,
  loading: false,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TATTOO_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TATTOO_SUCCESS:
      return {
        ...state,
        loading: false,
        tattoo: action.payload,
      };
    case FETCH_TATTOO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        tattoo: null,
      };
    case UPDATE_TATTOO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_TATTOO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_PLACEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLACEMENT_SUCCESS:
      return {
        loading: false,
        placement: action.payload,
        error: '',
      };
    case FETCH_PLACEMENT_FAILURE:
      return {
        loading: false,
        placement: [],
        error: action.payload,
      };
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
        error: null,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        category: [],
        error: action.payload,
      };

    default:
      return state;
  }
};


export default adminReducer
