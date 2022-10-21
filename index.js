const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const updatedTutorials = tutorials.map((string) => {
    return string.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
  return updatedTutorials;
}

// Below is how I made it make sense to myself. I tried to write out every step just so I knew what was happening.
// Both ways pass the tests.

// const titleCased = () => {
//   const updatedTutorials = tutorials.map((string) => {
//     const splitString = string.split(" ");
//     const uppercaseSplit = splitString.map((word) => {
//       const upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
//       return upperCaseWord;
//     });
//     const rejoinedString = uppercaseSplit.join(" ");
//     return rejoinedString;
//   });
//   return updatedTutorials;
// }