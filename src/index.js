module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  let arrStr = str.split("");
  let result = [];
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        arrStr[i] == bracketsConfig[j][1] &&
        result[result.length - 1] == bracketsConfig[j][0]
      ) {
        result.pop();
      } else if (arrStr[i] == bracketsConfig[j][0]) {
        result.push(arrStr[i]);
      }
    }
  }
  if (result.length == 0) return true;
  else return false;
};
