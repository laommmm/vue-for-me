import Vue from "vue";

// 动态引入component，默认引入所有components
// 组件名第一个字母为大写字母

let components = {};

// 路径解析
const analysis = resolve => {
  resolve.keys().forEach(key => {
    let _key = key.substring(2, key.length - 4);
    let _finalKey = [];
    _finalKey = _key.split("/");
    _key = _finalKey[_finalKey.length - 1];
    components[_key] = resolve(key);
  });
};

analysis(require.context("@/components/", true, /\.vue$/));

for (let key in components) {
  if (components.hasOwnProperty(key)) {
    let name = "";
    name = key.substring(0, 1);
    name = name.toLocaleUpperCase();
    name += key.substring(1);
    Vue.component(name, components[key].default);
  }
}

// 该组件目录为公共组件，所有私有组件单独在templates里自建目录
