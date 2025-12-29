// -----------------------for loop---------------------------
// let array = [1, 2, 3, 4, 5]

// for (let i = 0; i < array.length; i++) {
//     let element = array[i];
    
//     // console.log(element);
// }

// // console.log(i);


for(let i = 1; i<=25; i++){

    if(i%2==0){
        
        for(j=1; j<=10; j++){
            console.log(`Multiplication table of ${i} :-`);
            console.log(`${i} x ${j} = ${i*j}`); 
        }
    }
}

/*
    continue & break keyword
    continue - if the condition still the loop runs but it skips current action for that condition
    break - if the condition occurs it breaks the loop 
*/



// ------------------------------do-while loop--------------------------------
let val = 10;

while(val<=10){
    console.log(`the value of index is ${val}`);
    val = val+2;
    
}

let players = ["Rohit", "virat", "sachin"]
let i=0
while(i <= players.length){
    console.log(players[i]);
    i++;
}
