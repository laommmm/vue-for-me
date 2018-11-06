import axios from "axios";
import qs from "qs";
axios.defaults.timeout = 5000;

axios.interceptors.response.use(
  function(res) {
    // Do something with response data
    return res;
  },
  function(error) {
    // Do something with res error
    return Promise.reject(error);
  }
);

const fetch = (methods, opts, data) => {
  let httpDefaultOpts = {
    //http默认配置
    method: methods,
    url: opts,
    timeout: 10000,
    data: data || {},
    transformRequest: [
      data => {
        if (typeof data == "object") {
          return qs.stringify(data);
        } else {
          return data;
        }
      }
    ],
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  let promise = new Promise(function(resolve, reject) {
    axios(httpDefaultOpts)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
  return promise;
};
export default fetch;
