function convertToOldRoman(n) {
  let romanArray = [];
  if (n) {
    let romanM = Math.floor(n / 1000);
    for (let i = 0; i < romanM; i++) {
      romanArray.push("M");
    }
    let romanRemainder = n % 1000;
    // console.log(romanRemainder);
    if (romanRemainder >= 500) {
      let romanD = Math.floor(romanRemainder / 500);
      for (let i = 0; i < romanD; i++) {
        romanArray.push("D");
      }
    }
    romanRemainder = romanRemainder % 500;
    // console.log(romanRemainder);
    if (romanRemainder >= 100) {
      let romanC = Math.floor(romanRemainder / 100);
      for (let i = 0; i < romanC; i++) {
        romanArray.push("C");
      }
    }
    romanRemainder = romanRemainder % 100;
    // console.log(romanRemainder);
    if (romanRemainder >= 50) {
        let romanL = Math.floor(romanRemainder/50);
        for (let i=0; i<romanL; i++) {
            romanArray.push("L")
        }
    }
    romanRemainder = romanRemainder % 50;
    // console.log(romanRemainder);
    if (romanRemainder >= 10) {
        let romanX = Math.floor(romanRemainder/10);
        for (let i=0; i<romanX; i++) {
            romanArray.push("X")
        }
    }
    romanRemainder = romanRemainder % 10;
    // console.log(romanRemainder);
    if (romanRemainder >= 5) {
        let romanV = Math.floor(romanRemainder/5);
        for (let i=0; i<romanV; i++) {
            romanArray.push("V")
        }
    }
    romanRemainder = romanRemainder % 5;
    // console.log(romanRemainder);
    if (romanRemainder < 5) {
        for (let i=0; i<romanRemainder; i++) {
            romanArray.push("I")
        }
    }
  }
  return romanArray.join("");
}

module.exports = convertToOldRoman;

// console.log(convertToOldRoman(2999));
