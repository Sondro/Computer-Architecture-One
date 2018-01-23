/* 
 neg, 
 decToBin, binToDec, decToHex, hexToDec, binToHex, hexToBin,
*/
const neg = (num) => { return 0 - num; }
// ====================================
// Binary, Decimal, Hex conversions:
// ====================================
const decToBin = (num) => { return num.toString(2); }
const binToDec = (str) => { parseInt(num, 2); }
// --------------------------
const decToHex = (num) => { return num.toString(16); }
const hexToDec = (str) => { return parseInt(str, 16); }
// --------------------------
const binToHex = (str) => { parseInt(number , 2).toString(16).toUpperCase(); }
const hexToBin = (str) => { return ("00000000" + (parseInt(str, 16)).toString(2)).substr(-8); }
// ====================================
