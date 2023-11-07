import API from './apiHelper';

const dashboardHelper = async token => {
  return API('api/v1/approval/dashboards', {
    method: 'GET',
    head: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export default {dashboardHelper};
