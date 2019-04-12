import { ADD_USER, REMOVE_USER } from './actionTypes';

export const addUser = (name) => {
  return {
    type: ADD_USER,
    name
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};