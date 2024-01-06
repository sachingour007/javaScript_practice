function createHelloWorld () {
    return function (...arg){
        // console.log(...arg);
        return console.log("Hello World"); 
    }
}

const ans = createHelloWorld();
ans(123);


//This Function always return Hello World.