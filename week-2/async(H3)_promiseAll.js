function wait1(t) {
    const pr1 = new Promise((resolve,reject)=>{
        setTimeout(resolve,(t*1000))
    })
    return pr1;
}

function wait2(t) {
    const pr2 = new Promise((resolve,reject)=>{
        setTimeout(resolve,(t*1000))
    })
    return pr2;
}

function wait3(t) {
    const pr3 = new Promise((resolve,reject)=>{
        setTimeout(resolve,(t*1000))
    })
    return pr3;

}


async function calculateTime(t1, t2, t3) {
    const starttime = new Date().getTime()
    const finalPr = await Promise.all([wait1(t1),wait2(t2),wait3(t3)])
    const endtime = new Date().getTime()
    
    return (endtime-starttime);

    // only catch was putting async/await coz promise.all is also returns the promise object and we are calculating the time thatswhy we need to wait.


    // function calculateTime(t1, t2, t3) {
    // const starttime = Date.now()
    // return Promise.all([wait1(t1),wait2(t2),wait3(t3)])
    // .then(()=>{
    //     const endtime = Date.now()
    //     return endtime-starttime;
    // })


    // dekh jo then() ke andar return hai woh value return ho rahi hai next wale .then() ko naaki promise.all ko isliye hume whole promise return karni padegi aur waha pe promise execute hogi jo value return ho rahi hai woh next .then() pe chali jaayegi

}

calculateTime(1,2,3)