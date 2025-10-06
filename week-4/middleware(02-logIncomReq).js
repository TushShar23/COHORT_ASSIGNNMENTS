function logRequests(req, res, next) {
    const reqpattern = `${req.method} ${req.url} - ${new Date().toISOString()}`
    console.log(reqpattern)
    next();
    // We have to match the same regex only but it is quite tricky.
}