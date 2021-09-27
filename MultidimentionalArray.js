//3차원 배열을 생성
var x = new Array(3);
for(var i=0; i<3; i++) {
    x[i] = new Array(3);
    for(var j=0; j<3; j++){
        x[i][j] = new Array(3);
    }
}
//3차원 배열에 값을 대입
for(var count=1, i=0; i<3; i++){
    for(var j=0; j<3; j++){
        x[i][j] = count++;
    }
}