// Algorithm 1
// January 1, 1701 was a Saturday. How many Saturdays were on the first of the month between 1701 and 1800?

total = 1;
function figureThisOut() {
	var years = [];
	for(let y = 1701; y <=1800; y++){
		for (let m = 0; m <= 11; m++){
			var date1 = new Date();
			date1.setFullYear(y,m,1);
			if (date1.getDay(y,m,1) === 6){
				total++
			}
		}
	}
	console.log(total);
};
figureThisOut();

// **************Alternative***********************
// checking every saturday to see if it happens to be day 1 of that month. 

var date = new Date(Date.parse("January 1 1701"));
// console.log(date);
var dateInMil = Date.parse(date); //
//console.log(dateInMil);
var numOFWeeks = 1;
var firstOfMonth = 1; // first month is always a sat in this problem
var newDate = new Date(dateInMil);
while(newDate.getFullYear() < 1800){
	newDate = new Date(dateInMil + numOFWeeks * 604800000);
	if(newDate.getDate() == 1){
		firstOfMonth++;
	}
	numOFWeeks++;
}
console.log(firstOfMonth);
console.log(newDate);

//getDate() accounts for leap years,etc

//******************Alternative**********************
//loop on oustide for year
// loop on inside for month

var satCount = 0;
for(let j = 1701; j < 1800; j++){
	for(let i = 0; i <= 11; i++){
		var firstOfMonth = new Date(j,i,1);
		var firstSatOfMonth = firstOfMonth.getDay();
		if(firstSatOfMonth == 6){
			satCount++;
			console.log(i,j);
		}
	}
}
console.log(satCount)

//************Python Alternative*********************

import datetime
def findSaturdays():
sum = 0
for y in rage(1701,1801):
	for m in range(1, 13):
		if datetime.date(y,m,1).weeday() == 5;
			sum +=1
			print y,m
			return sum
print(findSaturdays())
