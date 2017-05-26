// bubble sort

// - start at the first element, and compare it to the one next to it.
// - if the left is bigger, they are out of order. SWITCH.
// -go to the next one, repeat.
// - do the entire list, n times, and the list MUST be sorted. 

// var unsorted = [5,2,6,3,1,3];

// first time through
// -check [0] and [1]... 5 > 2? YES. Switch.
// 2,5,6,,3,1,3
// -check [1] and [2].... 5 > 6? No
// -check [2] and [3]... 6 > 3? yes. Switch
// 2,5,3,6,1,3
// -check [3] and [4]... 6 > 1? yes. Switch
// 2,5,3,1,6,3
// -check [4] and [5]... 6 > 3? yes. Switch
// 2,5,3,,1,3,6


// second time through
// -check [0] and [1]... 2 > 5? No.
// -check [1] and [2].... 5 > 3? Yes. Switch
// 2,3,5,1,3,6
// -check [2] and [3]... 5 > 1? yes. Switch
// 2,3,1,5,3,6
// -check [3] and [4]... 5 > 3? yes. Switch
// 2,3,1,3,5,6
// -check [4] and [5]... 5> 6? No.

// If n is list length, the biggest number is at n after 1 time.
// If n is list length, the 2 biggest numbers are at the end after 2 times.
// Run a loop that goes throught the whole array and checks each one.
// We actually have to loop through the whole array minue the number of times already

// 1st iteration = loop whole array
// 2nd iteration = loop whole array -1
// 3rd iteration = loop whole array -2
// 4th iteration = loop whole array -3

// consider the cases....
// list is in reverse: have to go through n elements, n times
// lists in order: still have to go through n elements, n times(n^2)

// to optimize ( modified bubble sort), set up a bool to false and if a switch is made change it to true. At the end of the loop, if the bool is still false, no switches were made. List is in order! STOP!!. Saved you a bunch of time. 

// now the cases are different...

// list is in reverse: have to go through n elements, n times

// lists in order: loop once, bool is still false. Stop ( 1n)

// var empty= 0
// var random = [1,5,34,67,89,180]
// var sorted =[2,5,9,36,86,209]
// var unsorted=[3,17,98,206,13]
// var bool=true
// while(sorted){
// 	for(let i=0;i < random.length;i++){
// 		if (random[i] > random[i +1]){
// 			empty = random[i];
// 			random[i] = random[i+1];
// 			random[i+1]= empty
// 		}
// 	}
// }



// bubble-sort example
var random_sorted = [1,5,34,67,89,180];
var random_random = [180,34,1,89,67,5];
var random_reversed = [180,89,67,34,5,1];
function bubbleSort(list){
    var temp = 0;
    var sorted = true;
    while (sorted){
        var counter = 0;
        for (let i = 0; i < list.length; i++){
            if (list[i] > list[i + 1]){
                temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                counter++;
            }
        };
        if (counter == 0){
            sorted = false;
        }
    };
    console.log(list);
}
bubbleSort(random_reversed);

// ****************************** Bubble Sort Example***************************


// Bubble sort - should only have to loop once. the bool is still false.

function bubble_sort(the_array){
	var counter = 0;
	for(let i = the_array.length; i >0; i--){
		var bool = false;
		for(let j = 0; j < the_array.length; j++){
			var temp = 0;
			if (the_array[j] > the_array[j+1]){
				temp = the_array[j];
				the_array[j] = the_array[j+1]
				the_array[j+1] = temp;
				//if inside this condition, then we make a switch
				//change bool over to true
				bool= true;
			}
		}
		if(!bool){
			break;
		}else{
			counter++
		}
	}
	return {
		array: the_array,
		counter: counter
	}

}
var array_one(1,2,3,4,5,6,7,8,9,10);
var array_two(10,9,8,7,6,5,4,3,2,1);
var array_three(10,2,8,4,6,7,5,3,9,1);

console.log(bubble_sort(array_one));
console.log(bubble_sort(array_two));
console.log(bubble_sort(array_three));






// merge-sort example

































