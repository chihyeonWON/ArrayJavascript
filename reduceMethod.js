var a = [1,2,3,4,5];
a.reduce(function(prev,value){
    return prev + value;
},0);  // -> 15  1->3->6->10->15

a.reduce(function(prev,value){
    return prev + value;
}); // -> 15 3->6->10->15 

var a = [1,2,3,4,5];
a.reduce(function(p,v){
    return p*v;
},1); //->120 : 배열 요소의 곱
a.reduce(function(p,v){
    return (p>v)?p:v;
}); // ->5 : 최댓값

var a = ["Tom","Huck","Becky"];
a.reduce(function(p,v){
    return p + "" + v;
}); // ->"Tom Huck Becky"

var a = ["Tom","Huck","Becky"];
a.reduce(function(p,v){
    p[v]=v.length;
    return p
},{}); //->{Tom:3,Huck:4,Becky:6}
