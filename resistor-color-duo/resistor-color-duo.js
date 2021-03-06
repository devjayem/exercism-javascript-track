//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  "black", 
  "brown", 
  "red", 
  "orange", 
  "yellow", 
  "green", 
  "blue", 
  "violet", 
  "grey", 
  "white"];

export const decodedValue = (colorArr) => {
  return COLORS.indexOf(colorArr[0])  * 10 + COLORS.indexOf(colorArr[1])
};


