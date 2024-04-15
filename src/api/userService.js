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
};
