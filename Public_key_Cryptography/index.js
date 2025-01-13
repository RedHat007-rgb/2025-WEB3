//conversting a number into a bits


function convert(number){
    let binary=""
    while(number>0){
        binary=(number%2)+binary;
        number=Math.floor(number/2);
    }
    return binary;
}



console.log(convert(33));


let new_array=new Uint8Array([0,9876,95432,986545645644,68678666])
console.log(new_array);

/*
Here the output wille be Uint8Array(5) [ 0, 148, 200, 76, 10 ] 
because the maximum value of a byte is 255;it automatically convert the given number and gives the output
*/
