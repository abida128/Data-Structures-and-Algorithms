// 2. You are given an array of pet animals like [‘cat’, ‘rabbit’, ‘pigeon’, ‘parrot’, ‘goldfish’]. You need to loop over it and then if you encounter the name of rabbit, print out ‘this is rabbit’. When you don’t get the name of a rabbit, print ‘this is not a rabbit’. 


let petAnimals = ["Cat", "Rabbit", "Pigeon", "Parrot", "Goldfish"];

for(let i = 0; i <petAnimals.length; i++){

    if(petAnimals[i] == "Rabbit"){

        console.log("This is " + petAnimals[i]); 
    }
    else{

        console.log("This is not a Rabbit");
    }
}