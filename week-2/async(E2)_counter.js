let count = 0;

function Counter(){
    console.log(count);
    count++;
    setTimeout(Counter,1000);
}

Counter();

// Dimaag lagna tha ki settimeout mei call kise kare toh wahi function recursively call karna tha