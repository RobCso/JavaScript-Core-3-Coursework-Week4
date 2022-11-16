function convertToNewRoman(n) {
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
        if (romanRemainder >= 900) {
            romanArray.push("CM");
            romanRemainder = romanRemainder % 100;
        } else {
        for (let i = 0; i < romanD; i++) {
          romanArray.push("D");
        }}
      }
      romanRemainder = romanRemainder % 500;
      // console.log(romanRemainder);
      if (romanRemainder >= 100) {
        let romanC = Math.floor(romanRemainder / 100);
        if(romanRemainder >= 400) {
            romanArray.push("CD");
            romanRemainder = romanRemainder % 100;
        } else {
        for (let i = 0; i < romanC; i++) {
          romanArray.push("C");
        }}
      }
      romanRemainder = romanRemainder % 100;
      // console.log(romanRemainder);
      if (romanRemainder >= 50) {
        let romanL = Math.floor(romanRemainder / 50);
        if (romanRemainder >= 90) {
            romanArray.push("XC");
            romanRemainder = romanRemainder % 10;
        } else {
        for (let i = 0; i < romanL; i++) {
          romanArray.push("L");
        }}
      }
      romanRemainder = romanRemainder % 50;
      // console.log(romanRemainder);
      if (romanRemainder >= 10) {
        let romanX = Math.floor(romanRemainder / 10);
        if (romanRemainder >= 40) {
            romanArray.push("XL");
            romanRemainder = romanRemainder % 10;
        } else {
        for (let i = 0; i < romanX; i++) {
          romanArray.push("X");
        }}
      }
      romanRemainder = romanRemainder % 10;
      // console.log(romanRemainder);
      if (romanRemainder >= 5) {
        let romanV = Math.floor(romanRemainder / 5);
        if (romanRemainder = 9) {
            romanArray.push("IX");
            romanRemainder = 0;
        } else {
        for (let i = 0; i < romanV; i++) {
          romanArray.push("V");
        }}
      }
      romanRemainder = romanRemainder % 5;
       //console.log(romanRemainder);
      if (romanRemainder < 5) {
        if (romanRemainder == 4) {
            romanArray.push("IV");
        } else {
        for (let i = 0; i < romanRemainder; i++) {
          romanArray.push("I");
        }}
      }
    }
    return romanArray.join("");
}

module.exports = convertToNewRoman;

// console.log(convertToNewRoman(4))
// console.log(convertToNewRoman(9));
// console.log(convertToNewRoman(14));
// console.log(convertToNewRoman(44));
// console.log(convertToNewRoman(99));
// console.log(convertToNewRoman(400));
// console.log(convertToNewRoman(944));
// console.log(convertToNewRoman(2599));