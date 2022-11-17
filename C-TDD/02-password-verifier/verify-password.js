

function verify(p) {
    function hasNumbers(t) {
      let regex = /\d/g;
      return regex.test(t);
    }


  if (p.length < 8) {
    return "Password rejected";
  }
  if (p == null) {
    return "Password rejected";
  }
  if (p == p.toLowerCase()) {
    return "Password rejected";
  }
  if (!hasNumbers(p)) {
    return "Password rejected";
  }
  else return "Password Accepted"
}

//console.log(hasNumbers("absd"));
console.log(verify("0"))
console.log(verify("Aas"));
console.log(verify("aassddfffgg"));
console.log(verify("Aassddffgg"));
console.log(verify("Aassddffgg1"));