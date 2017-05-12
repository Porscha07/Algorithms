// // <!-- Algorithm 2 -->
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//codepen is better for working with larger numbers

var found = false;
for (let i - 2520; found == false; i+=2520){
	var x = 0;
	for(let j = 20; j >= 11; j--){
		if (i % j != 0){
			break;
		}else{
			x++;
		}
	}
	if ( x == 10){
			console.log(i);
			found = true;
			break
		
	}
}
answer- 2322.....
