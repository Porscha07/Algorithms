// Algorithm 3
// Write a Roman numeral converter. The program should be passed an integer and return the correct Roman numeral.
// As a bonus, please do the reverse. Accept a roman numeral, and convert it to an integer
// Rules: http://www.factmonster.com/ipka/A0769547.html
// Your converter should work up to 1009
function romanize(num) {
	var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
	roman = ''
	for (i in lookup ) {
		while ( num >= lookup[i] ) {
			roman += i;
			num -= lookup[i];
		}
	}
	console.log(roman);
	return roman;
}
console.log(romanize(4949));

//***************Alternative************************