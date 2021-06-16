// 5. Consider the above array again and find the smallest element in the array.



let array = [2, 0, 1, 6, 45, 89];
let smallestNumber = array[0];

for(let i = 0; i <array.length; i++){

        if(smallestNumber > array[i]){

            smallestNumber = array[i];
        }


}
console.log(smallestNumber);