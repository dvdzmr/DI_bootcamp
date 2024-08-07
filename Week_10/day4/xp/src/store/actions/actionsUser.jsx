import axios from 'axios';


export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});
export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});


export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errMsg = error.message;
        dispatch(fetchUsersFailure(errMsg));
      });
  };
};


export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';