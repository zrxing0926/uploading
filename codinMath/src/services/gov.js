import request from '../utils/request';

function govList() {
  return request('/api/main/govList');
}

export default govList