import { FETCH_TATTOOS_START, FETCH_TATTOOS_SUCCESS, FETCH_TATTOOS_FAILURE } from './action';

const initialState = {
  loading: false,
  tattoos: [],
  error: null,
};

const tattooReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TATTOOS_START:
      return { ...state, loading: true };
    case FETCH_TATTOOS_SUCCESS:
      return { ...state, loading: false, tattoos: action.payload };
    case FETCH_TATTOOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default tattooReducer1;
