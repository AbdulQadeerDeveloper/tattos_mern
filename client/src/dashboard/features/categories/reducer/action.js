// actions.js
import axios from 'axios';
import {DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE , ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } from './actionType';

import { API_END_POINTS } from "../../../../services/index"

export const addCategories = (name) => async dispatch => {
  dispatch({ type: ADD_CATEGORY_REQUEST });

  try {
    const response = await axios.post(API_END_POINTS.ADD_TATTOOS_CATEGORY, { name });
    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: response.data });
    console.log('Category added successfully');
  } catch (error) {
    console.error('Failed to add category', error);
    dispatch({ type: ADD_CATEGORY_FAILURE, payload: error });
  }
};

// Get Category _______________________________________
export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = (category) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: category,
});

export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});


export const fetchCategory = () => {
  return (dispatch) => {
    dispatch(fetchCategoryRequest());
    fetch(API_END_POINTS.GET_TATTOOS_CATEGORY)
      .then(response => response.json())
      .then(data => dispatch(fetchCategorySuccess(data)))
      .catch(error => dispatch(fetchCategoryFailure(error)));
  };
};


// Action creator for successful category deletion
export const deleteCategorySuccess = (categoryId) => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload: categoryId,
});

// Action creator for failed category deletion
export const deleteCategoryFailure = (error) => ({
  type: DELETE_CATEGORY_FAILURE,
  payload: error,
});

// Thunk action to delete a category
export const deleteCategory = (categoryId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_END_POINTS.DELETE_TATTOOS_CATEGORY}/${categoryId}`);
      dispatch(deleteCategorySuccess(categoryId));
    } catch (error) {
      dispatch(deleteCategoryFailure(error));
    }
  };
};

