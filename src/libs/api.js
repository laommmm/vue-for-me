let host;
let env = {
  dev: "http://0.0.0.0:3000/",
  prd: "http://m.dt-lake.com/"
};

if (process.env.NODE_ENV === "production") {
  host = env.prd;
} else if (process.env.NODE_ENV === "development") {
  host = env.dev;
} else {
  host = env.mock;
}

let url = {};

// 获取js解析
const analysis = resolve => {
  resolve.keys().forEach(key => {
    let address = resolve(key).default;
    for (let key2 in address) {
      if (address.hasOwnProperty(key2)) {
        address[key2] = host + address[key2];
      }
    }
    Object.assign(url, address);
  });
};

analysis(require.context("@/api", true, /\.js$/));

export default url;
