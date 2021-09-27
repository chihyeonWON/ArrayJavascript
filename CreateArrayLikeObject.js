//유사 배열 객체를 생성해서 값을 대입한다
var a = {}
for(var i=0; i<10; i++){
    a[i] = i;
} 
a.length = 10;
// 유사 배열 객체의 요소 합을 구한다
for(var i=0, sum=0; i<a.length; i++) sum += a[i];
console.log(sum); //->45

var a = {
    0: "A",
    1:"B",
    2:"C",
    length:3
};
Array.prototype.join.call(a,","); //-> "A,B,C"
Array.prototype.push.call(a,"D"); //-> Object {0:"A", 1:"B", 2:"C", 3:"D", length:4}
Array.prototype.slice.call(a,0); //-> ["A","B","C","D"] 진짜 배열로 변환
var a = {0:1,1:2,2:3,length:3};
Array.prototype.map.call(a,function(v){
    return v*v;
}); // -> [1,4,9]