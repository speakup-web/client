import { instance } from './instance';

export const userService = {
  getTaskforces(accessToken, limit = 4) {
    return instance
      .get(`/users/task-force?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  },

  postTaskforce(accessToken, data) {
    return instance
      .post('/users/task-force', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  },

  getTaskforceByEmail(email, accessToken) {
    return instance
      .get(`/users/task-force?email=${email}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  },

  putTaskforce(email, taskForce, accessToken) {
    return instance
      .put(
        `/users/task-force/${email}`,
        { taskForce },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => res.data);
  },

  deleteTaskforce(email, accessToken) {
    return instance
      .delete(
        `/users/task-force/${email}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => res.data);
  },
};
