var a = [1,2,3,4,5];
a.reduce(function(prev,value){
    return prev + value;
},0);  // -> 15  1->3->6->10->15

a.reduce(function(prev,value){
    return prev + value;
}); // -> 15 3->6->10->15 