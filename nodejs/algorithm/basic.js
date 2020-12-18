const readline = require('readline');

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function(line){
    input = line.split(' ').map((el) => parseInt(el));
    rl.close();
})

rl.on("close", function(){
    let A = input[0];
    let B = input[1];
    let C = input[2];
    let E = input[3];
    let D = getVisited(A,B)
    console.log(D)
    A = sliceArray(D, C, E)
    console.log(A)
})

function sliceArray( array, slice, len ) {
    const arr = array;
    const result = [];
    for(let i = 0; i < len; i++){
        result.push(arr[slice][i]);
    }
    return result;
}

function getVisited(row, col) {
    const visited = []
    for(let i=0; i<row; i++) {
        const temp = [];
        for(let j=1; j<col+1; j++) {
            temp.push(i * 5 + j);
        }
        visited.push(temp);
    };
    return visited;
}