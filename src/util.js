/* 
 neg, 
 decToBin, binToDec, decToHex, hexToDec, binToHex, hexToBin,
*/
const neg = (num) => { return 0 - num; }
// ====================================
// Decimal, Hex, Binary, conversions:
// ====================================
const decToBin = (num) => { return num.toString(2); };
const binToDec = (str) => { return parseInt(str, 2); };
// --------------------------
const decToHex = (num) => { return num.toString(16); };
const hexToDec = (str) => { return parseInt(str, 16); };
// --------------------------
const binToHex = (str) => { return parseInt(str, 2).toString(16).toUpperCase(); };
const hexToBin = (str) => { return (`00000000` + parseInt(str, 16).toString(2)).substr(-8); };
// ====================================

///*
console.log(binToDec(`11001111`));
console.log(binToHex(`11001111`));

console.log(hexToBin(`4C`));
console.log(hexToDec(`4C`));

console.log(decToBin(68));
console.log(decToHex(68));
//*/

