module.exports = (x, y) => {
  let result = '';
  for (var i = 0; i < x.length; i++) {
    if(x.charAt(i) == y.charAt(i)){
      result += '0';
    } else{
      result += '1';
    }
  }
  return result;
}
