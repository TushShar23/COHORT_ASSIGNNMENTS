// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

// THIS IS VALID FOR A SINGLE SYNCHRONOUS SYSTEM MEANS HANDLING ONE USER AT A TIME.

let numberOfRequestsForUser = {};

function rateLimitter(req,res,next){
  const userId = req.header('user-id');
  let reqcount,lastreqtime;
  reqcount=0;

  if(!userId){
    return res.status(400).json({ error: 'user-id is required' });
  }
  const currenttime = Math.floor((Date.now())/1000);// convert into seconds
  if(!numberOfRequestsForUser[userId]){
    numberOfRequestsForUser[userId] = {reqcount:0,lastreqtime:currenttime}
  }
  const userdata = numberOfRequestsForUser[userId];
  if(currenttime === userdata.lastreqtime){
    userdata.reqcount += 1;
  }
  else{
    userdata.reqcount = 1;
    userdata.lastreqtime = currenttime
  }

  if(userdata.reqcount > 5){
    return res.status(404).json({ error: 'Too many requests' })
  }
  next();
}

// app.use(ratelimiter)