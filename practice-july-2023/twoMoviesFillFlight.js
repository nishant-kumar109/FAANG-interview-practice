// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends,
// but they complain that the plane usually lands before they can see the ending.
// So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes)
// and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:
// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// Determine if two movie runtimes add up to the flight length
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // const movieLengthSet = new Set(movieLengths);

  const movieLengthSet = new Set();
  for (let i = 0; i < movieLengths.length; i++) {
    movieLengthSet.add(flightLength-movieLengths[i]);
  }

  console.log(movieLengths, movieLengthSet, flightLength);

  let movieCount = 0;
  for (let i = 0; i < movieLengths.length; i++) {
   if( movieLengthSet.has(movieLengths[i]) ){
    movieCount++;
   }
   if(movieCount >= 2) return true;
  }

  return false;
}
// article : https://www.tech-hour.com/javascript-performance-and-optimization

// Tests

let desc = "short flight";
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = "long flight";
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = "one movie half flight length";
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = "two movies half flight length";
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = "lots of possible pairs";
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = "not using first movie";
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = "multiple movies shorter than flight";
actual = canTwoMoviesFillFlight([5, 6, 7, 8], 9);
expected = false;
assertEquals(actual, expected, desc);

desc = "only one movie";
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = "no movies";
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
