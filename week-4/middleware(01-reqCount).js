// you need to make a middleware which is global (app.use()) for counting requests

function countReq(req,res,next){
  requestCount = requestCount+1;
  next();
}
