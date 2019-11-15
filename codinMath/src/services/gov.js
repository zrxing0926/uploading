import request from '../utils/request';

export function govList() {
  return request('/api/main/govList');
}


export function addGov(prams){
  return request('/api/main/addGov',{
    body: JSON.stringify(params),
    headers:{
      'content-type':'application/json'
    },
    method: 'POST'
  })
}