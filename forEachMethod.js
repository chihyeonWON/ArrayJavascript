var a = [1,2,3,4,5];
// 배열의 합을 구한다
var sum = 0;
a.forEach(function(value) {
    sum += value; //sum = sum+value;
});
console.log(sum); //->15;
//각 배열 요소의 곱을 구한다
a.forEach(function(v,i,a) { //첫번째 인수i : 배열 요소의 값 , 두번째 인수 : 배열 요소의 인덱스, 세번째 인수 : 배열의 참조
    a[i] = v*v;
});
console.log(a); //-> [1,4,9,16,25]
