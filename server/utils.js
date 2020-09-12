module.exports = {
  makeid,
};

function makeid(length) {
  var result = "";
  var charachters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  var charachtersLength = charachters.length;
  for (var i = 0; i < length; i++) {
    result += charachters.charAt(Math.floor(Math.random() * charachtersLength));
  }
  return result;
}
