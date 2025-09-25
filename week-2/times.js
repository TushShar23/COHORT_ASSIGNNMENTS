/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum,i;
    sum = i =0;
   const startime = Date.now()
//    console.log(startime)

   for(i=1;i<=n;i++){
    sum = sum+i;
   }
   const endtime = Date.now()

//    console.log(endtime)

   console.log((endtime-startime)/1000);

   // in the last part we just converted milliseconds to seconds by dividing by 1000.
   
}

// so when we used getMilliseconds() or getUTCMilliseconds() this gives us value between 0-999 let say starttime is 120ms and endtime is 456 so return 336 but when start time is 500ms and endtime is 120ms(coz it crosses the 0-999 range and started a new loop) then it gives a negative/wrong number.

calculateTime(10000000000);



// The performance.now() method returns a high resolution timestamp in milliseconds. It represents the time elapsed since (the time when navigation has started in window contexts, or the time when the worker is run in Worker and ServiceWorker contexts).

// Unlike Date.now, the timestamps returned by performance.now() are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.
