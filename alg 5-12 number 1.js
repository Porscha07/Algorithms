<!-- Algorithm # 1 -->

<!-- A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. -->


<!-- Find the largest palindrome made from the product of two 3-digit numbers. -->

var max = 0;
var num1 = 0;
var num2 = 0;
 
 for(let n = 999; n > 100; n--){
 	for(let i = 998; i > 99; i --){
 		var temp = n *i;
 		var tempString= temp.toString();
 		var tempList = tempString.split();
 		//no we have a list
 		//check to see if we have a palidronic....
 		var copyList = tempList.slice();
 		var reverseList = copList.reverse
 	}
 }

