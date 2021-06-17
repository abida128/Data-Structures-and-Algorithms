// 2. Suppose you’re given an array of animals [[‘cat’, ‘rabbit’], [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].  Now, when you encounter ‘cat' or ‘rabbit’ inside a nested loop, print ‘pet animals’ in the console. Also, if you encounter ‘pigeon’ or ‘parrot’, print ‘pet birds’. Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’

// using for nested loop

let animals = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]];

for (let i = 0; i < 2; i++){  // first loop

     console.log(animals[i]);


    for(let j = 0; j < 2; j++){   // second loop

        if(animals[0][0] = ["cat" , "rabbit"]){

            console.log("Pet Animals");
        }

        for(let k =0; k <2; k++){ // third loop


            if(animals[1][1] = ["pigeon", "parrot"]){


                 console.log("Pet  Bird");
        
    
            }
            for(let l=0; l< 2; l++){   // fourth loop
    
                 if(animals[2][2] = ["goldfish", "whale"]){
       
                    console.log("FISH");
        }
    }
        
    }
}

}


