function authenticateAPIKey(req, res, next) {
        if(req.get('100xdevs-api-key') === VALID_API_KEY){
            next()
        }
        // req.get() will return the value of the key which we have given.This method is used to get any specific header
        else{
            res.status(401).json({
                "message":"Invalid or missing API key"
            })
        }
}