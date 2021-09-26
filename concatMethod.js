var b = ["A","B","C"];
b.concat(["D","E"]); //->["A","B","C","D","E"]
b.concat(["D","E"],["F","G"]); //-> ["A","B","C","D","E","F","G"] 
b.concat(1,true,"X"); //->["A","B","C","D","E","F","G",1,true,"X"] 
console.log(b);