// Merge Meetings  
// Your company built an in-house calendar tool called HiCal. 
// You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as an object of a Meeting class with integer variables 
// startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// For example:
// new Meeting(2, 3);   meeting from 10:00 – 10:30 am
// new Meeting(6, 9);   meeting from 12:00 – 1:30 pm


// For example, given:
// [Meeting(0, 1), Meeting(3, 5), Meeting(4, 8), Meeting(10, 12), Meeting(9, 10)]

// your method would return:
// [Meeting(0, 1), Meeting(3, 8), Meeting(9, 12)]

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. 
// Here we've simplified our times down to the number of 30-minute slots past 9:00 am. 
// But we want the method to work even for very large numbers, like Unix timestamps. 
// In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

const mergeRanges = function(meetings){
	let sortedMeetings = meetings.sort((m1, m2) => m1["startTime"] - m2["startTime"] )
	let result = [];
	let currentMeeting = sortedMeetings[0];

	for(let i = 0; i< sortedMeetings.length-1; i++){
		let nextMeeting = sortedMeetings[i+1];
		if(currentMeeting["endTime"] >= nextMeeting["startTime"]){
			currentMeeting["endTime"] = Math.max(
				currentMeeting["endTime"], nextMeeting["endTime"])
			
		} else {
			result.push(currentMeeting);
			currentMeeting = nextMeeting	
		}
		
		if(i == sortedMeetings.length - 2) result.push(currentMeeting)
}
	return result;
}




// Code that pass all test cases:

// function mergeRanges(meetings) {

//     // sort the meetings by startTime
//     	meetings.sort((meetingA, meetingB)=>{
//     	return meetingA["startTime"] - meetingB["startTime"]
//     })

    

//     let resultMeetings = [meetings[0]]

 
//     for (let i = 1; i < meetings.length; i++) { // i = 1
//         const currentMeeting = meetings[i]; // (1,4)
//         const lastMergedMeeting = resultMeetings[resultMeetings.length - 1];

//         if(lastMergedMeeting["endTime"] >= currentMeeting["startTime"]){ // True
//             lastMergedMeeting["endTime"] = Math.max(lastMergedMeeting["endTime"], currentMeeting["endTime"]); // 5,8
//         }else{
//             resultMeetings.push(currentMeeting); // (1,4)
//         }
//     }
    
//   return resultMeetings;
// }




// Tests
let desc = 'meetings overlap';
let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
let expected = [{ startTime: 1, endTime: 4 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
expected = [{ startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
actual = mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
actual = mergeRanges([
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
assertArrayEquals(actual, expected, desc);

desc = 'oneLongMeetingContainsSmallerMeetings';
actual = mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }
]);
expected = [
  { startTime: 1, endTime: 12 }
];
assertArrayEquals(actual, expected, desc);

desc = 'sample input';
actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  // Sort the keys in each meeting to avoid
  // failing based on differences in key order.
  orderedA = a.map( function(meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  orderedB = b.map( function(meeting) {
    return JSON.stringify(meeting, Object.keys(meeting).sort());
  });
  const arrayA = JSON.stringify(orderedA);
  const arrayB = JSON.stringify(orderedB);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
