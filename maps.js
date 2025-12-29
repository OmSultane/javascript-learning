let maps = new Map();

maps.set('player1',"cricket");
maps.set('player2',"cricke");
maps.set('player3',"crickt");
maps.set('player4',"criket");

for(let [key,val] of maps){
    // console.log(key + ':- ' + val); 
}


//the for of doesn't work for objects so there is forin loop for objects

let myObj = {
    name:'Om',
    age:18,
    isActive:true
}

for(let value in myObj){
    // console.log(value);
    
}


let languages = ["java", "python", "c++"]

languages.forEach( function (lang){
    console.log('🔥' + lang);
    
})

for(let lang in languages){
    // console.log(languages[lang]);
    
}



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )