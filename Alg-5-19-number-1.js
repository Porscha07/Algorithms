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
