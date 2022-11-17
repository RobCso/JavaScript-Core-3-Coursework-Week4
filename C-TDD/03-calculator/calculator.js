function calculator(s){
    if (s =="") {
        return "0"
    }
    if(s.length == 1) {
        return s
    }
    if(s.length > 1) {
        let array = s.split(",");
        let numArray = array.map(num =>{
            return parseInt(num)
        })
        return numArray.reduce((a, b) => a + b)
    }
}

console.log(calculator(""))
console.log(calculator("0"));
console.log(calculator("134"));
console.log(calculator("3,9"));