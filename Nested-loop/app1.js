// 1. Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ]. Print all the members of this two-dimensional a


let  array = [ [1, 2], [3, 4], [5, 6] ];

for (i = 0; i < array.length; i++){    // first loop

    for(let j =0; j<= 2; j++){      // second loop

        console.log(array[i][j]);

    }
}


// using while loop

let k = 0;

while (k < array[k].length){    // first loop
    console.log(array[k]);
    k++;
    let l = 0;
    while(l <= 2){    // second loop

        console.log(array[k][l]);
        l++;
    }
}