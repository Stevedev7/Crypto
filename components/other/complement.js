module.exports=(x) => {
    let result = '';
    for (var i = 0; i < x.length; i++) {
      if(x.charAt(i) == 0){
        result += '1';
      } else{
        result += '0';
      }
    }
    return result;
  }