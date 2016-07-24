
module.exports = (str) => {
  return str ? str.replace(/((.)々)/g, "$2$2") : "";
}
