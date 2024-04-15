import { instance } from './instance';

export const authService = {
  postAuthLogin(data) {
    return instance.post('/auth/login', data).then((res) => res.data);
  },
};
