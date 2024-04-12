import { instance } from './instance';

export const reportService = {
  postReport(data) {
    return instance.post('/incident-reports', data).then((res) => res.data);
  },

  getReportDetailById(id) {
    return instance.get(`/incident-reports/${id}`).then((res) => res.data);
  },
};
