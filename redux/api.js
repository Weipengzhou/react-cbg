function parseJSON(response) {
    return response.json();
}
function obj2String(obj, arr = [], idx = 0) {
    for (let item in obj) {
      arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
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
        body:data,
    };

    return fetch(url, defaultOptions)
    .then((res)=>{return res.json()})
    .catch(() => {
      throw new Error('error');
    });
}

const url = 'http://www.gulugl.com/api/'

//通过ip获取定位信息
export function citySelect(text) {
    return get(url+'bddt')
}