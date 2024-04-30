// tattooDetailsReducer.js
import {
  FETCH_TATTOO_DETAILS_REQUEST,
  FETCH_TATTOO_DETAILS_SUCCESS,
  FETCH_TATTOO_DETAILS_FAILURE,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_REQUEST
} from './actionType';

const initialState = {
  loading: false,
  tattooDetails: null,
  data: [],
  error: '',
};

const tattooDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TATTOO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TATTOO_DETAILS_SUCCESS:
      return { ...state, loading: false, tattooDetails: action.payload, error: '' };
    case FETCH_TATTOO_DETAILS_FAILURE:
      return { ...state, loading: false, tattooDetails: null, error: action.payload };
    case CREATE_COMMENT_REQUEST:
      return { ...state, loading: true, };
    case CREATE_COMMENT_SUCCESS:
      return { loading: false, data: [...state.data, action.payload], error: '', };
    case CREATE_COMMENT_FAILURE:
      return { loading: false, data: [], error: action.payload, };

    default:
      return state;
  }
};

export default tattooDetailsReducer;
