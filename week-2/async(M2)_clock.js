
// Approach 1

// setInterval(()=>{
//     let clock = new Date()
//     console.log(clock.toLocaleTimeString())
    
// },1000)

// Approach 2

function Timer(){
    setTimeout(()=>{
        let date = new Date()
        console.log(date.toLocaleTimeString())
        Timer()
    },1000)

}

Timer()

// kind of an async recursion.
