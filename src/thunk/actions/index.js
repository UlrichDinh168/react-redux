import _ from 'lodash';
import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPostsAction = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUserAction = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsersAction = () => async (dispatch, getState) => {
  await dispatch(fetchPostsAction());
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach((id) => dispatch(fetchUserAction(id)));
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUserAction(id)))
    .value();
};
