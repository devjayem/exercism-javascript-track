//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let strTime = date.getTime()
  let endDate = new Date(strTime + 1000000000000)
  return endDate
};
