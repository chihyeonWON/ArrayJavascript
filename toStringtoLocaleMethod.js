["A","B","C",date].toString(); //-> "A,B,C"
[1,2,3,date].toString(); //-> "1,2,3"
[1,[2,3],date].toString(); //-> "1,2,3"

var date = new Date();
console.log(["A","B","C",date].toString()); //-> "A,B,C, 현재"
console.log(["A","B","C",date].toLocaleString()); // -> "A,B,C, 해당지역에 맞는 언어로 번역한 문자열로 변환"