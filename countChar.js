const countChar = (str, ch) => {

    /*First Approch*/
    /*
    let count = 0;
    for(let i =0; i< str.length; i++){
        console.log(str[i].toUpperCase());
        if(str[i].toUpperCase() === ch){
            count++;
        }
    }
    return count;
    */
   /*Second Approch*/

   str = str.toLowerCase();
   ch =  ch.toLowerCase();
    let count = str.split("").reduce((acc, curr) => {
        if(curr === ch){
            acc++;
        }
        return acc;
    },0)
    return count;
}

console.log(countChar("mississIppi", "I")); 