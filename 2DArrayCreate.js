//2차원 배열을 생성
var x = new Array(3); // 우변을 배열 리터럴 []로 표기할 수도 있음
for(var i=0; i<3; i++){
    x[i] = new Array(3);
}
//2차원 배열에 값을 대입
for(var count=1,i=0; i<3; i++){
    for(var j=0; j<3; j++){
        x[i][j] = count++;
    }
}
/* 배열 리터럴 방식으로 위의 2차원 배열 표현
var x = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
*/