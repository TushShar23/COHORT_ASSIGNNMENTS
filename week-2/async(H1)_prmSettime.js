// Promisified version of settimeout
function wait(n) {
    const pr = new Promise((resolve,reject)=>{
        setTimeout(resolve,(n*1000));
    })

    return pr;
}

// After (n*1000)milliseconds settimeout will call resolve() and then call be transferred to .then().
// ** INPUT - second.We need to convert it to milliseconds.