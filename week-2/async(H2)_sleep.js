function sleep(milliseconds) {
    // i need to write the code which haults the thread means some CPU oriented code which lets the thread pause and do not execute any other task asynchronously.

    const pr = new Promise((resolve,reject)=>{
        // we need to check the start time and till the given milliseconds have passed CPU should not execute any other task just haults the thread

        const startTime = new Date().getTime();
        while(new Date().getTime() < startTime+milliseconds){
            resolve()
        }
        // we are recording the startime at which function starts. Then in while while(new Date().getTime() < startTime+milliseconds) this is nothing but keeps the loop running and make the thread waits till the time this.time will not become greater than startTime+milliseconds.

        // (startTime + milliseconds) is the target time upto which we need to hault the thread and dont let it execute any thing.

        // the moment this.time becomes greater than target time our resolve() will execute and promise will be resolved.
    })
    
    return pr;
}