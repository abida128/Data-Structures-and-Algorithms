// 2. Suppose you’re given an array of animals [[‘cat’, ‘rabbit’], [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].  Now, when you encounter ‘cat' or ‘rabbit’ inside a nested loop, print ‘pet animals’ in the console. Also, if you encounter ‘pigeon’ or ‘parrot’, print ‘pet birds’. Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’

// using for nested loop

let animals = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]];

for (let i = 0; i < animals.length; i++){  // first loop

     console.log(animals[i]);


    for(let j = 0; j < animals[i].length; j++){   // second loop

        if((animals[i][j] == "cat" ) || ( animals[i][j] == "rabbit")){

            console.log("Pet Animals");
        }

        else  if((animals[i][j] == "pigeon") || (animals[i][j] == "parrot")){


            console.log("Pet  Bird");

        }

        else  if((animals[i][j] == "goldfish") || (animals[i][j] == "whale")){

           console.log("FISH");
        }
  
            
}

}