# O(1)-big oh of 1 ( the size of data set is irrelevant. The number of steps/space will remain constant.)

def function first_element(the_list):
	return the_list[0];

a_list = [1,2,4,6,45,234,523]
a_list = [1];
a_list = range(1,100000000);

deffunction first_element_minue_one(the_list):
	element = the_list[0] -1;
	return element



#O(N)- grows linerally. I.e the number of steps increase proportionate to however many elements there are. This creates a straight, diagonal line.
#worst case scenarios, will have to go as many times as the amount of inputs.
def loop_through_me(the_list):
	for elem in the_list:
		#do something
		pass;

O(N^2) - Represents an algorith whose performace is directly proportional to the number of elements squared. VERRY COMMON. Loop inside a loop.

def oh_squared(the_list):
	for elem in the_list:
		for elemen2 in the_list:
			do something
			pass
#for every new inside loop, you add a number to the big Oh.
# 3 nested loops = O(N^3)
# 4 nested loops = O(N^4)


# O(2^N) - this represents an algorithm that doubles with each new element. 
# i.d you add one new element, it takes twice as long.
def fib(num):
	if(num <= 1):
		return num;
	return fib(num - 2) + fib(num - 1);
	
print fib(10)