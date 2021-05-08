//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function say_hi() {
  return "Hello, World!";
}

export const hello = () => {
  throw new Error(say_hi());
};
