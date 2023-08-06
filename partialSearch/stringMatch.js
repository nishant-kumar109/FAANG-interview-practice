const getSearchArray = (str) =>{
    str = str.toLowerCase();
    const output = [];
    let acc = "";
    let accTotal = "";
    str.split("").forEach(char => {
      // Reset accumulator when space is encountered
      // Otherwise, add the new phrase to the array
      accTotal += char;
      output.push(accTotal);
      if (char === " ") {
        acc = "";
      } else {
        acc += char;
        output.push(acc);
      }
    });
    return Array.from(new Set(output));
};

console.log(getSearchArray('Honolulu'))
console.log(getSearchArray('mississippi is a great river of USA'));  
console.log(getSearchArray('It’s been over 5-7 days. Why haven’t I received my refund?'));
console.log(getSearchArray("What is a CVV code?"))
console.log(getSearchArray("The amount was debited, but I haven’t received a confirmation email/SM…"))
console.log(getSearchArray("Why is my payment not going through?"))




