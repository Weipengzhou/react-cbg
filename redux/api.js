import 'url-search-params-polyfill';
import 'isomorphic-unfetch';
function parseJSON(response) {
    return response.json();
}
function obj2String(obj) {
    return new URLSearchParams(obj).toString()
  }
function get(url,data) {
    const defaultOptions = {
        method: 'GET',
    };
  
    return fetch(url+"?"+obj2String(data), defaultOptions)
        .then(parseJSON)
        .catch(() => {
            throw new Error('error');
        });
}
function post(url,data) {
 
    const defaultOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body:obj2String(data),
    };

    return fetch(url, defaultOptions)
    .then((res)=>{return res.json()})
    .catch(() => {
      throw new Error('error');
    });
}


const url = 'http://localhost:8080/api/user/getInformation';


export function getIndex() {
    return get(url)
}