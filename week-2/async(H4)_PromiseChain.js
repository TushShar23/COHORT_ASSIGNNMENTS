
function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    const starttime = Date.now();
    return new Promise((resolve,reject)=>{
        resolve()
    })
    .then(()=>{
        return wait1(t1);
    })
    .then(()=>{
        return wait2(t2);
    })
    .then((w2)=>{
        return wait3(t3);
    })
    .then(()=>{
        const endtime = new Date().getTime();
        return (endtime-starttime)
    })