// Check email, taken from video "Simple form validation" from Noroff JS1 Module 4 lesson 4.
export function validateEmail(email) {
  const regEx = /[\w\-\.]+@(stud\.)?noroff\.no/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
