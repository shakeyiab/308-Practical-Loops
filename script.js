//Loop through all numbers from 1 to 100/

for(let x=1; x<=100; x++)
{ console.log(x)
if (x % 3 == 0) //If a number is divisible by 3, log “Fizz.”/
    console.log("fizz")
    else if(x % 5 == 0) //If a number is divisible by 5, log “Buzz.”/
        console.log("buzz")
    else if (x % 3 == 0 && x % 5 == 0)  //f a number is divisible by both 3 and 5, log “Fizz Buzz./
    console.log("fizz buzz")
else ((x % 3 !== 0 && x % 5 !== 0)) //If a number is not divisible by either 3 or 5, log the number.
console.log(x)
}


let n = 0;

while (n % 2 !== 0 && n % 3 !== 0) {
	
    console.log(n);
	if (n % 2 == 0 && n % 3 == 0) {
		break;
	}
	

}


