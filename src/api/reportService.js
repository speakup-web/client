import { instance } from './instance';

export const reportService = {
  postReport(data) {
    return instance.post('/incident-reports', data).then((res) => res.data);
  },

  getReportDetailById(id, accessToken) {
    const config = {};
    if (accessToken) {
      config.headers = { Authorization: `Bearer ${accessToken}` };
    }
    return instance
      .get(`/incident-reports/${id}`, config)
      .then((res) => res.data);
  },

  getReportStats(accessToken) {
    return instance
      .get('/incident-reports/stats', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  },

  getLatestReports(accessToken, offset = 0, limit = 4, status) {
    let endpoint = `/incident-reports?limit=${limit}&offset=${offset}`;

    if (status) {
      endpoint += `&status=${status}`;
    }

    return instance
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  },

  getLatestInProgressReports(accessToken) {
    return instance
      .get('/incident-reports?limit=4&status=on-progress', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);
  },

  putReportStatus(id, status, accessToken) {
    return instance
      .put(
        `/incident-reports/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => res.data);
  },
};
