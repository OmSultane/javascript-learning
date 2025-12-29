
let array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
    let element = array[i];
    
    // console.log(element);
}

// console.log(i);


for(let i = 1; i<=25; i++){

    if(i%2==0){
        
        for(j=1; j<=10; j++){
            console.log(`Multiplication table of ${i} :-`);
            console.log(`${i} x ${j} = ${i*j}`); 
        }
    }
}