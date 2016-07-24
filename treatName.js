
const treatName = (str) => {
  if(str.length === 1){
    return str + "一";
  }else {
    return str;
  }
}

module.exports = treatName;
