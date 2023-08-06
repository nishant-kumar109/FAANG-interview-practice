// Check if we're serving orders first-come, first-served

// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.
// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.
// Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!
// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)

// Given all three arrays, write a method to check that my service is first-come, first-served. 
// All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.
// As an example,
//  Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//  Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

//  Take Out Orders: [17, 8, 24]
//  Dine In Orders: [12, 19, 2]
//  Served Orders: [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. They do not have to be in increasing order.



function isFirstComeFirstServed2(takeOutOrders, dineInOrders, servedOrders) {
    let takeOutCounter = 0; 
    let dineInCounter = 0; 
  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[takeOutCounter]) {
        takeOutCounter++
    }
    else if (servedOrders[i] === dineInOrders[dineInCounter]) {
        dineInCounter++
    } else {
        return false
    }
  }

  if (takeOutOrders.length !== takeOutCounter || dineInOrders.length !== dineInCounter) {
    return false;
  }
  return true;
}

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length)
    return false;
  for (let i = 1; i < takeOutOrders.length; i++) {
    if (
      servedOrders.indexOf(takeOutOrders[i - 1]) <
      servedOrders.indexOf(takeOutOrders[i]) === false ||

      servedOrders.indexOf(takeOutOrders[i - 1]) === -1 ||
      servedOrders.indexOf(takeOutOrders[i]) === -1
    ) {
      return false;
    }
  }

  for (let i = 1; i < dineInOrders.length; i++) {
    if (
      servedOrders.indexOf(dineInOrders[i - 1]) <
      servedOrders.indexOf(dineInOrders[i]) === false ||

      servedOrders.indexOf(dineInOrders[i - 1]) === -1 ||
      servedOrders.indexOf(dineInOrders[i]) === -1
    ) {
      return false;
    }
  }
  return true;
}


// Tests

let desc = "both registers have same number of orders";
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = "registers have different lengths";
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = "one register is empty";
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = "served orders is missing orders";
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = "served orders has extra orders";
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = "one register has extra orders";
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = "one register has unserved orders";
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

desc = "order numbers are not sequential";
actual = isFirstComeFirstServed(
  [27, 12, 18],
  [55, 31, 8],
  [55, 31, 8, 27, 12, 18]
);
assertEquals(actual, true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
