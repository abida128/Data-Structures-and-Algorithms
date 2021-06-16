// 5. You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. However, if I pass any other name to it, it says ‘unknown’

let animal1 = "lion";
let animal2 = "leopard";

let animal3 = "cat";
let animal4 = "rabbit";



        if ((animal1  == "lion") || (animal2 == "leopard")){
             console.log("Wild Animals");
        }

        else if((animal3 == "cat") || (animal4 == "rabbit")){
            console.log("Pet Animals");
        }

        else{
            console.log("Unknown");
        }
 


