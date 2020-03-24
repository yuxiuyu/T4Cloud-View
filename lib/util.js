const utils = function() {
  // 自定义判断元素类型JS
  function toType(obj) {
    return {}.toString
      .call(obj)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  }
  // 参数过滤函数
  function filterNull(o) {
    for (var key in o) {
      if (o[key] === null) {
        delete o[key];
      }
      if (toType(o[key]) === "string") {
        o[key] = o[key].trim();
      } else if (toType(o[key]) === "object") {
        o[key] = filterNull(o[key]);
      } else if (toType(o[key]) === "array") {
        o[key] = filterNull(o[key]);
      }
    }
    return o;
  }
  // 表单对象去重
  function removeFormSame(form, total) {
    let keys = Object.keys(form);
    keys.forEach(item => {
      if (total[item] != null) {
        form[item] = total[item];
      }
    });
    return form;
  }
  // 看项目里有没有这个文件
  function matchVueFiles(name) {
    var arr = name.split("views/");
    if (arr.length > 1) {
      name = name.replace("views/", "./") + ".vue";
      const context = require.context("@/views", true, /\.vue$/);
      const keys = context.keys();
      return keys.indexOf(name);
    }
    return 0;
  }
  return {
    toType,
    filterNull,
    removeFormSame,
    matchVueFiles
  };
};
module.exports = utils();
