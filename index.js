/**
 Question 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
 List 5 array methods that fall under each of them.
 */

 
 /**
    Mutating array methods are ones that change the object after the method has been used. Mutation is basically changing the array itself instead of 
    returning a new array with the new changes. They modify the array they are called on. If you call a mutating array method, the array will be changed.
    If you’re writing code that needs to modify the array in-place, you should use mutating methods.

    In terms of performance, Mutating methods tend to be faster than non-mutating methods, as they don’t need to create a new array. However, this 
    performance gain comes at the cost of code readability and maintainability, as mutating methods can be more difficult to understand and debug.
    
    5 array methods that fall under Mutating array methods are -
    a. push()
    b. pop()
    c. shift()
    d. unshift()
    e. splice(). 



    Non-mutating methods do not change the object after the method has been used. They don’t modify the array they are called on. If you call a
    non-mutating array method, the original array will remain unchanged.  These methods create a new array from the elements of the original array, 
    but do not modify the original array. If you’re writing code that needs to keep track of the original array, you should use non-mutating methods.
    Non-mutating methods are slower, but can be easier to understand and debug.

    5 array methods that fall under Non-Mutating array methods are -
    a. map()
    b. filter()
    c. reduce()
    d. indexOf
    e. join() 
  */


/**  Question 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
    1.Add ‘Kotlin’ to the end of the array
    2.Add ‘Java’ after ‘Ruby’
    3.Remove the first item in the array
    4.Add ’Scala’ and ‘Swift’ to the beginning of the array
    5.Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */

    //  1.Add ‘Kotlin’ to the end of the array
      
        let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
        languages.push('kotlin');
        console.log(languages);

     //  2.Add ‘Java’ after ‘Ruby’ 

        languages.splice(3, 0, 'Java');
        console.log(languages);
   
     //  3.Remove the first item in the array 

        languages.splice(0,1);
        console.log(languages);

    //  4.Add ’Scala’ and ‘Swift’ to the beginning of the array

        languages.splice(0, 0, 'Scala', 'Swift');
        console.log(languages);

    //   5.Replace ‘PHP’ with ‘Go’ and ‘Rust’
         languages.splice(3,3, 'Go', 'Rust');
         console.log(languages);
/**
   Question 3. What will be the value of fruit after calling the function changeFruit?
      let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
 *  */        

      let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

      let fruits = changeFruit(fruit);
      console.log(fruits);

      // When the function changeFruit is called and console.logged out, the value of fruit will be ['apple', 'mango', 'orange']

/**
 *  Question 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
 */
    
      function acceptArray(arrayNums){
         let maxValue = -Infinity;
         for(element of arrayNums){
            if (element > maxValue){
               maxValue = element;
            };
         };
         return maxValue;
      };

     let max = acceptArray([4,5,10,-2]);
      console.log(max);

/** Question 5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array
 *  with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
 */

      function valTimesIndex(arrayOfNums){
         let newArray = [];
         for (index in arrayOfNums ){
            newArray.push(arrayOfNums[index]*index);
         }
         return newArray;
      }
      let multipliedArray = valTimesIndex([1,2,3]);
      let multipliedArray2 = valTimesIndex([5,10,15]);
      console.log(multipliedArray);
      console.log(multipliedArray2);